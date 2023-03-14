const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// Route pour l'inscription d'un nouvel utilisateur
router.post('/register', authController.register);

// Route pour la connexion d'un utilisateur existant
router.post('/login', authController.login);

// Route pour la déconnexion d'un utilisateur
router.post('/logout', authController.logout);
                
// Middleware pour vérifier le jeton JWT de l'utilisateur
// router.use(authController.verifyToken);

// Route pour la régénération des jetons JWT et de rafraîchissement
router.post('/refresh-tokens', authController.refreshTokens);

// Update user profile route
router.put('/profile/:id', authController.updateProfile);

router.get('/profile/:id', authController.getProfile);

router.delete('/profile/:id', authController.deleteProfile);



module.exports = router;
