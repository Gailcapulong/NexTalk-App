import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  // ✅ fix: was "sendWelcomeEmail"
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name}<${sender.email}>`,
    to: email, // ✅ now works
    subject: "Welcome to NexTalk!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
  console.log("Welcome Email sent successfully", data);
};
