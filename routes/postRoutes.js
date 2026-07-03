const express = require("express");
const router = express.Router();

const controller = require("../controllers/postController");

router.get("/", controller.getPosts);

router.get("/posts", controller.getPosts);

router.get("/posts/:id", controller.getPost);

router.post("/posts", controller.createPost);

module.exports = router;
