const router = require("express").Router();
const Book = require("../../models/booksModel.js");

// route is "/api/book"
router.route("/").get((req, res) => {
    Book.find(req.query)
    .then(dbModel => res.json(dbModel))
}).post((req,res) => {
    Book.create(req.body)
    .then(dbModel =>  res.json(dbModel))
});

module.exports = router;