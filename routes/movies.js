const express = require("express");
const router = express.Router();
const Movie = require("../models/Movies");

//Get all existing Movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.json({ message: err });
  }
});

//add a new Movie
router.post("/", async (req, res) => {
  const post = new Movie({
    name: req.body.name,
    director: req.body.director,
  });
  try {
    const savedMovie = await post.save();
    res.json(savedMovie);
  } catch (err) {
    res.json({ message: err });
  }
});


//get a specific movie data
router.get('/:movieId',async (req,res)=>{
    try{
        const movie = await Movie.findById(req.params.movieId);
        res.json(movie);
    }
    catch(err){
        res.json({message:err});
    }
})

//delete a existing movie
router.post("/:movieId", async (req, res) => {
  try {
    const removeMovie = await Movie.remove({ _id: req.params.movieId });
    res.json(removeMovie);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a movie data
router.patch("/:movieId", async (req, res) => {
  try {
    const updateMovie = await Movie.updateOne(
      { _id: req.params.movieId },
      { $set: { name: req.body.name } }
    );
    res.json(updateMovie);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
