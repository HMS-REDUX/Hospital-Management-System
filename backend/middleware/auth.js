const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.doctor_token;
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.userId;

    console.log(req.user);
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
