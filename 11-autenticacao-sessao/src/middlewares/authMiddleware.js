const authMiddleware = (req, res, next) => {
  if (req.session.authenticated) {
    next();
  } else {
    return res.redirect("/");
  }
};

module.exports = authMiddleware;
