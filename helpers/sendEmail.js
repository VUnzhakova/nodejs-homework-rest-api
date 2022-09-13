const sgMail = require("@sendgrid/mail");
const { createError } = require("./createError");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "vunzhakova@outlook.com" };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw createError(404, "Not Found");
  }
};

module.exports = sendEmail;
