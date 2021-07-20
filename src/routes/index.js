const router = require("express-promise-router")();
const { sendMail } = require("../controllers/mail");

router.post('/contact',sendMail);

module.exports = router;