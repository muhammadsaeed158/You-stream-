import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Only GET allowed" });

  const { uid } = req.query;

  if (!uid) return res.status(400).json({ message: "UID is required" });

  try {
    const db = getFirestore(app);
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists())
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user: docSnap.data() });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}