function contactEmailTemplate({ name, email, subject, message }) {
  return `
  <div style="width:100%; background:#f0f2f5; padding:30px; font-family:'Helvetica Neue', Arial, sans-serif;">
    <div style="
      max-width:650px;
      margin:auto;
      background:#ffffff;
      border-radius:12px;
      padding:40px 35px;
      box-shadow:0 8px 25px rgba(0,0,0,0.08);
      border:1px solid #e0e0e0;
    ">

      <!-- Header -->
      <h1 style="text-align:center; color:#111827; margin-bottom:10px; font-weight:700; font-size:24px;">
        🙏 Thank You, ${name} for Reaching me Out!!
      </h1>

      <p style="text-align:center; color:#555; font-size:15px; margin-top:0; margin-bottom:30px; line-height:1.6;">
        I sincerely appreciate you reaching out through my portfolio. Below is a summary of your message.
      </p>

      <!-- User Details -->
      <div style="background:#f9fafb; padding:25px; border-radius:10px; border-left:5px solid #2563EB; margin-bottom:30px; line-height:1.7;">
        <p style="color:#374151; font-size:15px; margin:0;">
          <b>Subject:</b> ${subject} <br>
          <b>Message:</b><br> ${message}
        </p>
      </div>

      <!-- Elegant Thank You Paragraph -->
      <p style="color:#4b5563; font-size:15px; line-height:1.7; margin-bottom:30px;">
        Your message has been received and I will personally get back to you at the earliest.  
        I truly value your time and interest.  
        Meanwhile, feel free to revisit my portfolio or connect with me through the links below.
      </p>

      <!-- Back to Portfolio Button -->
      <div style="text-align:center; margin-bottom:25px;">
        <a href="#" style="
          display:inline-block;
          background:linear-gradient(90deg, #10B981, #3B82F6);
          color:white;
          padding:12px 24px;
          margin:5px;
          border-radius:8px;
          text-decoration:none;
          font-size:15px;
          font-weight:600;
          box-shadow:0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 18px rgba(0,0,0,0.2)';" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';">
          ← Back to Portfolio
        </a>
      </div>

      <!-- Social / CTA Buttons -->
      <div style="text-align:center; margin-bottom:25px;">
        <a href="https://www.instagram.com/charan_sidhu_13/" style="
          display:inline-block;
          background:#E1306C;
          color:white;
          padding:10px 18px;
          margin:5px;
          border-radius:6px;
          text-decoration:none;
          font-size:14px;
          font-weight:bold;
        ">Instagram</a>

        <a href="https://github.com/cssidhu0001" style="
          display:inline-block;
          background:#333333;
          color:white;
          padding:10px 18px;
          margin:5px;
          border-radius:6px;
          text-decoration:none;
          font-size:14px;
          font-weight:bold;
        ">GitHub</a>

        <a href="https://buymeacoffee.com/charansidhu" style="
          display:inline-block;
          background:#FF813F;
          color:white;
          padding:10px 18px;
          margin:5px;
          border-radius:6px;
          text-decoration:none;
          font-size:14px;
          font-weight:bold;
        ">Buy Me a Coffee</a>

        <a href="https://calendly.com/charanjeetsinghsidhu/30min" style="
          display:inline-block;
          background:#4F46E5;
          color:white;
          padding:10px 18px;
          margin:5px;
          border-radius:6px;
          text-decoration:none;
          font-size:14px;
          font-weight:bold;
        ">Schedule Meeting</a>
      </div>

      <!-- Footer -->
      <p style="text-align:center; color:#9ca3af; font-size:13px; margin-top:30px; line-height:1.6;">
        This is an automatically generated email. Please do not reply.  
        I will respond to your message as soon as possible. ❤️
      </p>

    </div>
  </div>
  `;
}

module.exports = contactEmailTemplate;
