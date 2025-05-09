const express = require('express');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  searchPosts
} = require('../controllers/postController');

const Post = require('../models/postModel');
const router = express.Router();

// Agora as rotas usam prefixo relativo (sem /posts)
router.get('/search', searchPosts);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

// Comentários
router.get('/:id/comments', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found." });

    res.status(200).json(post.comments || []);
  } catch (err) {
    res.status(500).json({ message: "Error fetching comments.", error: err.message });
  }
});

router.post('/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found." });

    post.comments.push({ content, createdAt: new Date() });
    await post.save();

    res.status(201).json(post.comments.at(-1));
  } catch (err) {
    res.status(500).json({ message: "Error adding comment.", error: err.message });
  }
});

module.exports = router;
