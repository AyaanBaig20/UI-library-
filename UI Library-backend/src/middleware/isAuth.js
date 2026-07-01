import jwt from "jsonwebtoken";

async function isAuth(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized, please login",
      });
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);

    if (!verify) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.userId = verify.userId;
    
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
}

export default { isAuth};