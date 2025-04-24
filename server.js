const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/post-service';

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('🟢 Conectado ao MongoDB (post-service)');
    const PORT = process.env.PORT || 8002;
    app.listen(PORT, () => {
      console.log(`🚀 Post Service rodando na porta ${PORT}`);
    });
  }).catch(err => {
    console.error('🔴 Erro ao conectar no MongoDB:', err);
    process.exit(1);
  });
}


module.exports = app;
