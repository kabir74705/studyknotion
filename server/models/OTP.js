const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");
const OTPSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true,
    },
    otp : {
        type:String,
        required:true,
    },
    createdAt : {
        type:Date,
        default:Date.now(),
        expires:5*60,
    },
    
    
})
async function sendVerificationEmail(email, otp) {
	// Create a transporter to send emails

	// Define the email options

	// Send the email
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
			emailTemplate(otp)
		);
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Define a post-save hook to send email after the document has been saved

OTPSchema.post('save', async function (doc) {
	// Only send an email when a new document is created
	// this.isNew in pre middleware
	const emailresult = await sendVerificationEmail(this.email, this.otp);
	console.log("emaillll-----" + emailresult)
  });
module.exports = mongoose.model("OTP",OTPSchema);