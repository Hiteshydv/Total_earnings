// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Video = require('./models/Video');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API endpoint for video upload and earnings calculation
app.post('/upload', async (req, res) => {
  try {
    const { title, link, views, likes, comments, subscribers } = req.body;

    // Create a new video
    const newVideo = new Video({
      title,
      link,
      views,
      likes,
      comments,
      subscribers,
    });

    // Save the video to the database
    await newVideo.save();

    // Calculate earnings based on the specified formula
    const earnings = Math.min(subscribers, views) + 10 * comments + 5 * likes;

    res.status(201).json({ message: 'Video uploaded successfully', earnings });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
