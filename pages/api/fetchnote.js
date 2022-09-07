// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function handler(req, res) {
  const id = req.query.id;
  const getNote = async () => {
    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      res.status(200).json("No such document!");
    }
  };
  getNote();
}
