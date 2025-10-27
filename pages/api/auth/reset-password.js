import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Only POST method allowed" });

  const { email } = req.body;

  if (!email)
    return res.status(400).json({ message: "Email required" });

  try {
    const auth = getAuth(app);
    await sendPasswordResetEmail(auth, email);
    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}