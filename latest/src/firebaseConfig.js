// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg3crWuA-sR-Qf6FQAYNRlIBDOAcsmjho",
  authDomain: "the-smile-3139f.firebaseapp.com",
  databaseURL: "https://the-smile-3139f-default-rtdb.firebaseio.com",
  projectId: "the-smile-3139f",
  storageBucket: "the-smile-3139f.firebasestorage.app",
  messagingSenderId: "431371216663",
  appId: "1:431371216663:web:f5c335aef1daf71e503952",
  measurementId: "G-YHPVVXJ66Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Function to save contact form data
export const saveContactForm = async (formData) => {
  try {
    const contactFormRef = ref(database, 'contactForm');
    const newContactForm = push(contactFormRef);
    await push(contactFormRef, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      message: formData.message,
      timestamp: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving to Firebase:', error);
    return { success: false, error: error.message };
  }
};

export { app, database, analytics };
