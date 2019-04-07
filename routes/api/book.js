const router = require("express").Router();
const Book = require("../../models/booksModel.js");

// route is "/api/book"
router.route("/").get((req, res) => {
    Book.find(req.query)
        .then(dbModel => res.json(dbModel))
}).post((req, res) => {
    Book.create(req.body)
        .then(dbModel => res.json(dbModel))
});

router.route("/:id")
    .delete((req, res) => {
        Book.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

module.exports = router;