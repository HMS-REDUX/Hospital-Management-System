const jwt = require("jsonwebtoken");

const verifyTokens = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ error: "User ID is missing in cookies. Please log in." });

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    console.log("Decoded Token:", decodedToken);
    req.userId = decodedToken.userId;
    next();
  });
};

module.exports = verifyTokens;
