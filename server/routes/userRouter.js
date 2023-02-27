const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);
/* router.get('/auth', (req, res) => {
      res.json({ message: 'Auth OK' });
}); */
// В адресной строке браузера пишем адрес и запускаем сервак: http://localhost:3000/api/user/auth

module.exports = router;
