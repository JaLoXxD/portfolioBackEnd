const fs = require("fs");

module.exports = {
	downloadPDF: (req, res) => {
		res.download("./src/CurriculumJH.pdf");
	},
};
