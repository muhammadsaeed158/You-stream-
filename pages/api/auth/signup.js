import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { app } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Only POST method allowed" });

  const { name, email, password, profileImage } = req.body;

  if (!email || !password || !name)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: name, photoURL: profileImage });

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      profileImage: profileImage || "",
      createdAt: serverTimestamp(),
    });

    res.status(200).json({ message: "Signup successful", uid: user.uid });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}