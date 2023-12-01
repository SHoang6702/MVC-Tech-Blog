const { Post } = require("../models");

const postData = [
  {
    title: "Breaking News! Farewell jimmy!",
    content: "Jimmy has died long live Jimmy!.",
    user_id: 1,
  },
  {
    title: "Timmy is a thief",
    content: "Timmy stole Zimmy's burger.",
    user_id: 2,
  },
  {
    title: "Zimmy is a liar",
    content: "Zimmy always lies about stuff",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
