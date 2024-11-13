let playlists = [];

module.exports = {
  //Get /playlists
  index: (req, res) => {
    res.json(playlists);
  },

  // Get /playlist/:id
  show: (req, res) => {
    const { id } = req.params;

    const playlist = playlists.find((playlist) => playlist.id === +id);

    if (!playlist) {
      res.status(404).json({ message: "Playlists não encontrado" });
    }

    res.json(playlist);
  },

  // Post /playlist
  save: (req, res) => {
    const { name, tags, musics } = req.body;

    if (typeof name !== "string") {
      return res.status(400).json({ message: "name must be a string" });
    }

    if (!Array.isArray(tags)) {
      return res.status(400).json({ message: "tags must be an array" });
    }

    const newPlaylist = {
      id: Math.floor(Math.random() * 999999),
      name: name,
      tags: tags,
      musics: musics ?? [],
    };

    playlists.push(newPlaylist);

    res.status(201).json(newPlaylist);
  },

  // Put /playlists/:id

  // Delete /playlists/:id
};
