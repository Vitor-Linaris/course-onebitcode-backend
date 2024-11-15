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
  update: (req, res) => {
    const { id } = req.params;
    const { name, tags, musics } = req.body;

    playlistIndex = playlists.findIndex((playlist) => playlist.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "Playlist não encontrada" });
    }

    playlists[playlistIndex].name = name;
    playlists[playlistIndex].tags = tags;
    playlists[playlistIndex].musics = musics;

    res.json(playlists[playlistIndex]);
  },

  // Delete /playlists/:id
  delete: (req, res) => {
    const { id } = req.params;

    playlistIndex = playlists.findIndex((playlist) => playlist.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "Playlist não encontrada" });
    }

    playlists.splice(playlistIndex, 1);

    res.status(204).end();
  },
};
