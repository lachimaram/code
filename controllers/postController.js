let posts = [];

// GET all posts
exports.getPosts = (req, res) => {
    res.render("index", { posts });
};

// GET one post
exports.getPost = (req, res) => {

    const id = Number(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("post", { post });
};

// POST create post
exports.createPost = (req, res) => {

    const { title, content } = req.body;

    const post = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(post);

    res.json(post);
};
