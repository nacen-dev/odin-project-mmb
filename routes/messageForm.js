const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("form", {title: "Message Form"})
})

module.exports = router;