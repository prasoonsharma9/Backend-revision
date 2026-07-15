import { syncIndexes } from "mongoose";

const asyncHandler = (func) => async (req, res, next) => {
  try {
    func(req, res, next);
  } catch (error) {
    res.send(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export default asyncHandler;
