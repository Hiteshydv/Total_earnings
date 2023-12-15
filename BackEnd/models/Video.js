// models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  link: String,
  views: Number,
  likes: Number,
  comments: Number,
  subscribers: Number,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
