import { AuthRequest } from "../middlewares/authMiddleware.js";
import { User } from "../models/userModel.js";
import { Asset } from "../models/assetModel.js";
import { Claim } from "../models/claimModel.js";
import { Response } from "express";

const getDashboardStats = async (req: AuthRequest, res: Response) => {
  try {
    const [
      totalUsers,
      totalAssets,
      totalLostAssets,
      totalFoundAssets,
      totalClaimedAssets,
      pendingAssets,
      pendingClaims,
      approvedClaims,
      rejectedClaims,
      recentAssets,
      claims,
    ] = await Promise.all([
      User.countDocuments(),
      Asset.countDocuments(),
      Asset.countDocuments({ status: "lost" }),
      Asset.countDocuments({ status: "found" }),
      Asset.countDocuments({ status: "claimed" }),
      Asset.countDocuments({ isApproved: false }),
      Claim.countDocuments({ status: "pending" }),
      Claim.countDocuments({ status: "approved" }),
      Claim.countDocuments({ status: "rejected" }),

      Asset.find()
        .populate("reportedBy", "fullName")
        .sort({ createdAt: -1 })
        .limit(5),

      Claim.find()
        .populate("asset", "title")
        .populate("claimedBy", "fullName")
        .sort({ createdAt: -1 }),
    ]);

    
    const recentClaims = claims
      .filter((claim: any) => claim.asset)
      .slice(0, 5);

    return res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalAssets,
        totalLostAssets,
        totalFoundAssets,
        totalClaimedAssets,
        pendingAssets,
        pendingClaims,
        approvedClaims,
        rejectedClaims,
        recentAssets,
        recentClaims,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { getDashboardStats };