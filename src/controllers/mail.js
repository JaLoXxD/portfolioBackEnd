var nodemailer = require("nodemailer");

module.exports = {
	sendMail: (req, res) => {
		var transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true, // use SSL
			auth: {
				user: "sendmailjh512@gmail.com",
				pass: "hvxnkicltzjlulky",
			},
		});

		var mail = req.body.mail;
		var name = req.body.name;
		var subject = req.body.subject;
		var text = req.body.text;

		// setup e-mail data
		var mailOptions = {
			from: '"Posible oferta de trabajo" <sendmailjh512@gmail.com>',
			to: "jorgino91.jh@gmail.com",
			subject: subject,
			text: text,
			html: `<b style="font-size:30px; text-align: center; color:#1f8af4;"><span style="color:#4ce0a7;">${name}</span> quiere contactarse contigo</b><br> <p style="font-size:20px; color:#000">Debes contactarte al siguiente correo: ${mail}</p><p style="font-size:20px; color:#000">Mensaje: ${text}</p>`,
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				res.status(500).json({
					success: false,
					message: "ocurrio un error",
					error: error,
				});
			}
			res.status(200).json({
				success: true,
				info,
			});
		});
	},
};
