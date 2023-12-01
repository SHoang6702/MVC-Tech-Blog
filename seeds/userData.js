// Importing Post model from ../models directory
const { User } = require("../models");
// Array of dummy blog post data
const userData = [
  {
    username: "Jimmy",
    email: "Jimmy@jimmy.com",
    password: "Jimmy1234",
  },
  {
    username: "Timmy",
    email: "Timmy@jimmy.com",
    password: "Timmy2341",
  },
  {
    username: "Bimmy",
    email: "Bimmy@jimmy.com",
    password: "Bimmy3412",
  },
  {
    username: "Aimmy",
    email: "Aimmy@jimmy.com",
    password: "Aimmy4123",
  },
  {
    username: "Zimmy",
    email: "Zimmy@jimmy.com",
    password: "Zimmy1234",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;
