//FOR PASSKEY GENERATING
// https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4P2Hv5aBlzyT4IvvanGSzllU7CeVxTeRVnX2xklyii7TJtH8RoacshP6m4MyMlUS5XEhjNcMjA1LFk9Ib61IUWj6O7_eA
const axios = require('axios');
const nodemailer = require('nodemailer');

// Function to check the price
async function checkPrice() {
    let max = 3;

    for (let i = 0; i < 10; i++) {
        // Example condition: if 'i' is equal to 3, call sendEmail
        if (i === 3) {
            await sendEmail(max);
        }

        // Simulate some delay before the next iteration
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second (1000 milliseconds)
    }
}

// Function to send an email
async function sendEmail(price) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ananthu97468219@gmail.com', // Your Gmail email address
            pass: 'iuxljpjvdldngccf' // Your Gmail password or app-specific password
        }
    });

    const mailOptions = {
        from: 'ananthu97468219@gmail.com',
        to: 'thethree.ananthu@gmail.com',
        subject: 'Price Alert',
        text: `The price is now within your selected range: $${price}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Start the price check
console.log("Server running");
checkPrice();
