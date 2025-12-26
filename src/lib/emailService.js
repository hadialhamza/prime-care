import nodemailer from "nodemailer";

export const sendInvoiceEmail = async (bookingData) => {
  // --- DEBUGGING START ---
  console.log("Email User:", process.env.EMAIL_USER);
  console.log("Password Loaded:", process.env.EMAIL_PASSWORD ? "Yes" : "No");
  // --- DEBUGGING END ---
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Explicitly state the host
      port: 587, // Change port to 587 (often allowed by ISPs)
      secure: false, // Must be false for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Helps avoid some self-signed certificate errors
      },
    });

    const mailOptions = {
      from: `"PrimeCare Support" <${process.env.EMAIL_USER}>`,
      to: bookingData.userEmail,
      subject: `Booking Confirmation & Invoice - ${bookingData.serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #4F46E5; text-align: center;">Booking Confirmation</h2>
          <p>Hi <strong>${bookingData.userName}</strong>,</p>
          <p>Thank you for choosing PrimeCare. Your booking request has been received and is currently <strong>${
            bookingData.status
          }</strong>.</p>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Invoice Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Service:</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${
                  bookingData.serviceName
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Date:</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${new Date(
                  bookingData.date
                ).toDateString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Duration:</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${
                  bookingData.duration
                } Hours</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-top: 1px solid #e5e7eb; font-weight: bold;">Total Amount:</td>
                <td style="padding: 8px 0; border-top: 1px solid #e5e7eb; font-weight: bold; color: #4F46E5; text-align: right;">$${
                  bookingData.totalCost
                }</td>
              </tr>
            </table>
          </div>

          <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            This is an automated message. Please do not reply directly to this email.<br/>
            Address: ${bookingData.address}, ${bookingData.district}
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
