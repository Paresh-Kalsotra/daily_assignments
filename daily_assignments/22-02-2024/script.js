const http = require("http");
const {
  users,
  posts,
  albums,
  todos,
  comments,
  photos,
} = require("./database.js");

function requestHandler(req, res) {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "home");
      res.writeHead(200);
      res.end(
        "Welcome to JSON Typicode dummy.\nChange the url and add:\n /users or /posts or /albums or /todos or /comments or /photos to get respective data. "
      );
      break;
    case "/users":
      res.setHeader("Content-Type", "users");
      res.writeHead(200);
      res.end(JSON.stringify(users));
      break;
    case "/posts":
      res.setHeader("Content-Type", "posts");
      res.writeHead(200);
      res.end(JSON.stringify(posts));
      break;
    case "/albums":
      res.setHeader("Content-Type", " albums");
      res.writeHead(200);
      res.end(JSON.stringify(albums));
      break;
    case "/todos":
      res.setHeader("Content-Type", "todos");
      res.writeHead(200);
      res.end(JSON.stringify(todos));
      break;
    case "/comments":
      res.setHeader("Content-Type", "comments");
      res.writeHead(200);
      res.end(JSON.stringify(comments));
      break;
    case "/photos":
      res.setHeader("Content-Type", " photos");
      res.writeHead(200);
      res.end(JSON.stringify(photos));
      break;
    default:
      res.writeHead(404);
      res.end("Data not found");
      break;
  }
}

const server = http.createServer(requestHandler);
//running server
server.listen(8080, () => {
  console.log("server running at 8080");
});
