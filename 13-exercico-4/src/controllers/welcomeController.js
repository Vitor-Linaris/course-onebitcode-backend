module.exports = {
  welcome: (req, res) => {
    const displayName = req.authenticatedUser?.name ?? "Visitante";
    res.json({ message: `Seja bem-vindo(a), ${displayName}` });
  },
};
