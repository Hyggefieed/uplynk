// firestoreService.js
import { db } from './firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Upload a note
export const uploadNote = async (noteData) => {
  const docRef = await addDoc(collection(db, 'notes'), noteData);
  return docRef.id;
};

// Get all notes for a session
export const getNotesBySession = async (sessionId) => {
  const q = query(collection(db, 'notes'), where('sessionId', '==', sessionId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
