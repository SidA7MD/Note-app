// Middleware/Ratelimiter.js
import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(req.ip); // ✅ use IP as key
    if (!success) {
      return res.status(429).json({ message: "Too many requests, please try again later." });
    }
    next();
  } catch (error) {
    console.error("Rate Limit error:", error);
    next(); // still allow request if limiter fails
  }
};

export default rateLimiter;
