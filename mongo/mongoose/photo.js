const mongoose = require("mongoose");

let Photos = mongoose.Schema;

const PhotosSchema = new Photos (
{
    user:
    {
        type: String
    },
    url:
    {
        type: String
    },
    title:
    {
        type: String
    },
    description:
    {
        type: String
    }
})

module.exports = mongoose.model("PhotosValidation", PhotosSchema, "photos");