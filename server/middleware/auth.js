import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorizaton;

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.json({ success: false, messgae: "Invalid Token" });
  }
};
export default auth;