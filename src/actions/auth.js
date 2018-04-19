import { firebase, signInWithEmailAndPassword } from "../firebase/firebase"

export const login = (uid) => ({
  type: "LOGIN",
  uid
});

export const startLogin = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch((e) => {
      console.log("Error: ", e);
    })
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};