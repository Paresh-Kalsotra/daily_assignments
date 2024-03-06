const express = require("express");
const mongoConnect = require("./mongodb.js");

const server = express();
const port = 8000;

server.use(express.json());

//func to get aggregations and log them to console
async function getAggregations() {
  const db = await mongoConnect(); //getting db
  const movies = db.collection("movies");

  // agg to get action movies with rating gt 9
  let agg = await movies
    .aggregate([
      {
        $match: { "imdb.rating": { $gt: 8 }, genres: "Action", type: "movie" },
      },
      { $project: { title: 1, _id: 0 } },
    ])
    .toArray();

  // agg to get title ond plot of movies by christopher nolan
  agg = await movies
    .aggregate([
      { $match: { directors: "Christopher Nolan" } },
      { $project: { _id: 0, title: 1, plot: 1 } },
    ])
    .toArray();

  //agg to get top 5 movies with most award wins
  agg = await movies
    .aggregate([
      {
        $match: {
          "imdb.rating": { $gte: 9 },
        },
      },
      { $addFields: { totalAwards: { $sum: ["$awards.wins"] } } },
      { $sort: { totalAwards: -1 } },
      { $limit: 5 },
      { $project: { _id: 0, title: 1, totalAwards: 1 } },
    ])
    .toArray();

  // agg to group movies by genre and sort them based on avg genre rating
  agg = await movies
    .aggregate([
      { $unwind: "$genres" },
      { $group: { _id: "$genres", avgRating: { $avg: "$imdb.rating" } } },
      { $sort: { avgRating: -1 } },
    ])
    .toArray();

  //agg to get top 5 hindi movies with most votes
  agg = await movies
    .aggregate([
      { $match: { languages: "Hindi" } },
      { $sort: { "imdb.votes": -1 } },
      { $limit: 5 },
      { $project: { _id: 0, title: 1, "imdb.votes": 1 } },
    ])
    .toArray();

  // agg to get top english &scifi movies with  min 10000 votes
  agg = await movies
    .aggregate([
      {
        $match: {
          "imdb.rating": { $exists: true, $ne: null },
          "imdb.votes": { $gt: 10000 },
          languages: "English",
          genres: "Sci-Fi",
        },
      },
      { $sort: { "imdb.rating": -1 } },
      { $limit: 10 },
      { $project: { _id: 0, title: 1, "imdb.rating": 1, "imdb.votes": 1 } },
    ])
    .toArray();

  // agg to group movies by genre and sort them based on avg viewer rating
  agg = await movies
    .aggregate([
      { $unwind: "$genres" },
      {
        $group: {
          _id: "$genres",
          avgRating: { $avg: "$tomatoes.viewer.rating" },
        },
      },
      { $sort: { avgRating: -1 } },
    ])
    .toArray();

  // agg to get sort directors based on most wins
  agg = await movies
    .aggregate([
      { $unwind: "$directors" },
      { $group: { _id: "$directors", totalWins: { $sum: "$awards.wins" } } },
      { $sort: { totalWins: -1 } },
      { $limit: 10 },
    ])
    .toArray();

  //agg to get avg rating of movies and series
  agg = await movies
    .aggregate([
      { $group: { _id: "$type", avgRating: { $avg: "$imdb.rating" } } },
      { $sort: { avgRating: -1 } },
    ])
    .toArray();

  // agg to group movies by language and sort them based on avg viewer rating
  agg = await movies
    .aggregate([
      { $unwind: "$languages" },
      {
        $group: {
          _id: "$languages",
          avgRating: { $avg: "$tomatoes.viewer.rating" },
        },
      },
      { $sort: { avgRating: -1 } },
    ])
    .toArray();

  // agg to get cast having average rating greater than 8
  agg = await movies
    .aggregate([
      { $unwind: "$cast" },
      { $group: { _id: "$cast", avgRating: { $avg: "$imdb.rating" } } },
      { $match: { avgRating: { $gte: 8 } } },
      { $sort: { avgRating: -1 } },
      { $limit: 20 },
    ])
    .toArray();

  // agg to get year where more than 100 movies are made
  agg = await movies
    .aggregate([
      { $group: { _id: "$year", count: { $sum: 1 } } },
      { $match: { count: { $gte: 100 } } },
      { $sort: { count: -1 } },
    ])
    .toArray();

  //agg to directors with movies having rating greater than 9
  agg = await movies
    .aggregate([
      { $match: { "imdb.rating": { $gt: 9 } } },
      { $group: { _id: "$directors", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { _id: 0, director: "$_id", count: 1 } },
    ])
    .toArray();

  //agg to get title of series where rating gt 9 and award wins gt 1
  agg = await movies
    .aggregate([
      {
        $match: {
          type: "series",
          "awards.wins": { $gt: 1 },
          "imdb.rating": { $gt: 9 },
        },
      },
      { $project: { _id: 0, title: 1 } },
    ])
    .toArray();

  //agg to get top 5 actors with most award wins
  agg = await movies
    .aggregate([
      { $unwind: "$cast" },
      {
        $match: { cast: { $exists: true }, "awards.wins": { $gt: 0 } },
      },
      {
        $group: { _id: "$cast", totalWins: { $sum: "$awards.wins" } },
      },
      { $sort: { totalWins: -1 } },
      { $limit: 5 },
    ])
    .toArray();

  //   console.log(agg);  // console one or all aggregation
}

//starting server
server.listen(port, (err) => {
  if (!err) {
    console.log(`server listening at ${port} `);
  }
});

getAggregations();
