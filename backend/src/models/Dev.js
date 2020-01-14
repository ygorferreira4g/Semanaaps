const mongoose = require('mongoose');

const DevSchema = new nongoose.Schema({
    name: String,
    github_username: String,
    avatar_url: String,
    techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);