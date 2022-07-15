const SongController= require("./../controllers/song.controller")

module.exports = (app)=>{
    app.get("/api/test", SongController.testApi )
    app.get("/api/songs", SongController.allSongs)
    app.get("/api/songs/:id", SongController.oneSong)
    app.post("/api/songs", SongController.addSong)
    app.put("/api/songs/:id", SongController.updateSong)
    app.delete("/api/songs/:id", SongController.deleteSong)
    app.get("/api/artists/:artist", SongController.songsByArtist)
    app.post("/api/songs2", SongController.addSong2)
}