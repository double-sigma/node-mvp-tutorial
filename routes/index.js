var express = require('express');
var router = express.Router();


let landing = require('../controllers/landing');
let user = require('../controllers/user');
let { hasAuth } = require('../middleware/hasAuth.js')

router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);

router.get('/logout', user.logout);
router.post('/logout', user.logout);


router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', hasAuth, landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);
router.get('/lead/:lead_id/delete', landing.show_delete_lead);
router.post('/lead/:lead_id/delete', landing.delete_lead);
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);
module.exports = router;

// https://www.youtube.com/watch?v=G8uL0lFFoN0&t=1872s
// 2:23n