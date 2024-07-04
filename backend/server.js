const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password', // Use environment variables to securely store this
  },
});

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'ansarimsp786@gmail.com',
    subject: 'New Subscription',
    text: `New subscription from: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
    res.status(200).json({ success: true, message: 'Email sent' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
