import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginActionGoogle } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function useFirebase(setError) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          const email = result.user.email;
          dispatch(loginActionGoogle(email))
            .then((response) => {
              if (response.payload && response.payload.status === 200) {
                // La solicitud fue exitosa, lo que podría indicar que el usuario está registrado.
                navigate("/welcome");
                console.log("Inició sesión con éxito");
              }
              if (response.response&&response.response.status === 401) {
                // La solicitud no fue exitosa o el usuario no está registrado.
                navigate("/instructions");
                console.log(
                  "El usuario no está registrado o la solicitud falló"
                );
              }
            });
        } else {
          console.log("Inicio de sesión con Google cancelado o fallido");
        }
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
        setError(true);
      });
  };
  return { signInWithGoogle };
}
