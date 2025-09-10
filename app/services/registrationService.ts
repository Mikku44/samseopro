import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "~/libs/firebase.client";




export async function getRegistration() {
  const registrationCol = collection(db, 'registration');
  const registrationSnapshot = await getDocs(registrationCol);
  const registrationList = registrationSnapshot.docs.map(doc => doc.data());
  return registrationList;
}