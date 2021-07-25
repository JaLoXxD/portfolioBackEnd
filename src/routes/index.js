const router = require("express-promise-router")();
const { sendMail } = require("../controllers/mail");
const { downloadPDF } = require("../controllers/pdf");

router.post("/contact", sendMail);
router.get("/pdf", downloadPDF);

module.exports = router;
