const express = require("express");
const playListController = require("./controllers/playListController");

const router = express.Router();

router.get("/playlists", playListController.index);
router.get("/playlist/:id", playListController.show);
router.post("/playlist", playListController.save);

module.exports = router;
