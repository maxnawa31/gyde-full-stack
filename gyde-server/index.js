require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const postRoutes = require('./routes/posts');
const db = require("./models");
const PORT = 8081;
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use(
  '/api/users/:id/posts',
  loginRequired,
  ensureCorrectUser,
  postRoutes);

app.get('/api/posts', loginRequired, async function(req,res,next){
  try {
let posts = await db.Posts.find()
  .sort({createdAt: 'desc'})
  .populate('user', {
    username: true,
    profileImageUrl: true
  })
  return res.status(200).json(posts);
  } catch(err) {
    return next(err)
  }
})
  app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});
