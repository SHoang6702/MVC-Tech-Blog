const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Liar!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Stupid Timmy!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "It was all Zimmy's fault!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "I didn't do it!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Jimmy is mean...",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Great article!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I agree with you!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
