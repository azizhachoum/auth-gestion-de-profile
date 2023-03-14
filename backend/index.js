const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

// Initialiser l'application Express
const app = express();

// Configurer la base de données
connectDB();

// Utiliser les middlewares
app.use(express.json());
app.use(cors());

// Utiliser les routes
app.use('/api/auth', authRoutes);

// Utiliser le middleware d'erreur
app.use(errorMiddleware);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
