const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 8002;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('🟢 MongoDB conectado (post-service)');
  app.listen(PORT, () => {
    console.log(`🚀 Post Service rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('🔴 Erro ao conectar ao MongoDB:', err.message);
});
