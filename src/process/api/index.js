import repositories from "Repositories";

import { initializeApp } from "firebase/app";
import { Creators as UserCreators } from "Reducers/user";

import store from "../redux/store";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
  doc,
  serverTimestamp,
  deleteDoc,
  updateDoc,
} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW7_CTsPfkD1_ikJbWk7C7Y34EZxXaEVA",
  authDomain: "fir-test-db5b2.firebaseapp.com",
  projectId: "fir-test-db5b2",
  storageBucket: "fir-test-db5b2.appspot.com",
  messagingSenderId: "736979991168",
  appId: "1:736979991168:web:e63395bb8da7bdf26d0465",
  measurementId: "G-2JYR64CZB3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);
const database = getFirestore(app);

const getStore = async (action) => {
  await store().store.dispatch(action);
};

const collectionRef = collection(database, "todos");

let TOKEN = null;
let REFRESH_TOKEN = null;
let USER_ID = null;

//ITS CALLED WHEN USER LOGS IN OR LOGS OUT

onAuthStateChanged(authentication, (user) => {
  if (user) {
    const fullName = user.displayName;
    const email = user.email;
    const isEmailVerfied = user.emailVerified;
    USER_ID = user.uid;
    TOKEN = user.accessToken;
    REFRESH_TOKEN = user.refreshToken;

    if (!isEmailVerfied) {
      alert("Please verify your email first");
      getStore(UserCreators.logout());
    }

    const QUERY = query(
      collectionRef,
      where("owner", "==", USER_ID),
      orderBy("createdAt", "desc")
    );

    getStore(
      UserCreators.updateUserProps({
        isEmailVerfied: isEmailVerfied,
        userFullName: fullName,
        userEmail: email,
      })
    );

    getDocs(QUERY).then((res) => {
      let DATA = [];
      res.docs.forEach((doc) => {
        DATA.push({ ...doc.data(), id: doc.id });
      });
      getStore(UserCreators.updateUserProps({ todos: DATA }));
    });
  } else {
    TOKEN = null;
    REFRESH_TOKEN = null;
  }
});

const Api = {
  API_CALL: "API_CALL",
  API_ERROR: "API_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",

  repositories,

  registerUser: async (
    email,
    password,
    userInformation,
    auth = authentication
  ) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser);
    await updateProfile(auth.currentUser, userInformation);
    alert("Verification link sent to your email, please verify your account");
  },

  updateUserProfile: (userInformation, currentUser = auth.currentUser) => {
    return updateProfile(currentUser, userInformation);
  },

  loginUser: (email, password, auth = authentication) => {
    return signInWithEmailAndPassword(auth, email, password);
  },

  logout: () => signOut(authentication),

  addData: (targetCollection, data, db = database) => {
    return addDoc(collection(db, targetCollection), {
      ...data,
      owner: USER_ID,
      createdAt: serverTimestamp(),
    });
  },

  updateData: (docId, collection, data) => {
    const docRef = doc(database, collection, docId);
    return updateDoc(docRef, data);
  },

  deleteData: (collection, documentId) => {
    const docRef = doc(database, collection, documentId);
    return deleteDoc(docRef);
  },

  liveUpdate: () => {
    const QUERY = query(
      collectionRef,
      where("owner", "==", authentication.currentUser.uid),
      orderBy("createdAt", "desc")
    );
    return onSnapshot(
      QUERY,
      (querySnapshot) => {
        const DATA = [];
        querySnapshot.docs.forEach((doc) => {
          DATA.push({ ...doc.data(), id: doc.id });
        });
        getStore(UserCreators.updateUserProps({ todos: DATA }));
      },
      (err) => {
        return console.log(`Encountered error: ${err}`);
      }
    );
  },

  getToken: () => {
    return TOKEN;
  },

  getRefreshToken: () => {
    return REFRESH_TOKEN;
  },

  getUserId: () => {
    return USER_ID;
  },

  getEmailVerified: () => {
    return EMAIL_VERIFIED;
  },
};

export default Api;
