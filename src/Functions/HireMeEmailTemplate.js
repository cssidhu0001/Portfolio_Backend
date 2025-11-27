const instagramLink = "https://www.instagram.com/charan_sidhu_13/";
const githubLink = "https://github.com/cssidhu0001";
const coffeeLink = "https://buymeacoffee.com/charansidhu";
const meetingLink = "https://calendly.com/charanjeetsinghsidhu/30min";
const portfolioLink = "#";
const year = new Date().getFullYear();
module.exports = function HireMeEmailTemplate({
  fullName = "User",
  email = "Not Provided",
  projectType = "Not Provided",
  projectTitle = "No Title",
  budget = "Not Provided",
  description = "No description provided.",
  location = "Not provided",
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You</title>
  </head>

  <body style="margin:0; padding:0; background:#f5f5f5; font-family:'Segoe UI', Arial, sans-serif;">
    <div style="max-width:650px; margin:40px auto; background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.08); color:#333;">

      <!-- Header -->
      <div style="background:linear-gradient(135deg,#4b6cb7,#182848); padding:45px 30px; text-align:center; color:#fff;">
        <h1 style="margin:0; font-size:28px; font-weight:600;">Thank you for giving me the opportunity — ${fullName}!</h1>
        <p style="margin-top:10px; font-size:15px; opacity:0.9;">
          Your project inquiry has been received successfully.
        </p>
      </div>

      <!-- Body -->
      <div style="padding:35px;">
        <p style="line-height:1.7; font-size:15px; color:#444;">
          I appreciate your interest in working with me.  
          Your submission has been recorded and is currently under review.  
          I will get in touch with you shortly to discuss the next steps and explore how we can bring your project to life.
        </p>

        <!-- Top Buttons -->
        <div style="margin:30px 0; text-align:center;">
          <a href="${portfolioLink}" style="display:inline-block; margin:6px; padding:12px 22px; background:#4b6cb7; color:#fff; text-decoration:none; border-radius:8px; font-weight:500;">Portfolio</a>

          <a href="${githubLink}" style="display:inline-block; margin:6px; padding:12px 22px; background:#222; color:#fff; text-decoration:none; border-radius:8px; font-weight:500;">GitHub</a>

          <a href="${instagramLink}" style="display:inline-block; margin:6px; padding:12px 22px; background:#d62976; color:#fff; text-decoration:none; border-radius:8px; font-weight:500;">Instagram</a>

          <a href="${coffeeLink}" style="display:inline-block; margin:6px; padding:12px 22px; background:#f7c65a; color:#000; text-decoration:none; border-radius:8px; font-weight:600;">Buy Me a Coffee</a>

          <a href="${meetingLink}" style="display:inline-block; margin:6px; padding:12px 22px; background:#0a7cff; color:#fff; text-decoration:none; border-radius:8px; font-weight:500;">Schedule Meeting</a>
        </div>

        <!-- Project Details -->
        <div style="margin-top:25px; padding:20px; background:#f8f9fc; border-radius:12px; border-left:4px solid #4b6cb7;">
          <h3 style="margin:0; font-size:18px; font-weight:600; color:#182848;">
            Project Details Submitted
          </h3>

          <p style="margin-top:12px; font-size:14px; line-height:1.7; color:#555;">
            <strong>Contact Email:</strong> ${email}<br/>
            <strong>Project Type:</strong> ${projectType}<br/>
            <strong>Project Title:</strong> ${projectTitle}<br/>
            <strong>Budget:</strong> ${budget}<br/>
            <strong>Location:</strong> ${location}<br/><br/>

            <strong>Description:</strong><br/>
            ${description}
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding:18px; text-align:center; font-size:12px; color:#777;">
        This email is not monitored. Kindly do not reply.<br/>
        All Rights Reserved © ${year} GurSikhDevs, Haldwani.
      </div>

    </div>
  </body>
  </html>`;
};
