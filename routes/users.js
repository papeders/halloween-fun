const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/signup', ctrl.users.signUp);
router.get('/profile/:index', ctrl.users.showUser);
router.get('/login', ctrl.users.renderLogin);
router.get('/:index/edit', ctrl.users.profileEdit);

router.post('/', ctrl.users.postUser);
router.post('/login', ctrl.users.login);
router.put('/:index', ctrl.users.editProfile);
router.delete('/:index', ctrl.users.deleteProfile)

module.exports = router;