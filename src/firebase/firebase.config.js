import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
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
/* apiKey: "AIzaSyCoCVHO7bsVQA3-19BKYV85GFgpBTkhuk0",
authDomain: "imenu-5e6ac.firebaseapp.com",
projectId: "imenu-5e6ac",
storageBucket: "imenu-5e6ac.appspot.com",
messagingSenderId: "564284873108",
appId: "1:564284873108:web:c3fb2cb8a87d82ec3ed781"
 */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* export default function useFirebase(setError) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {

    try {
      const result = await signInWithPopup(auth, provider);
 */

/*       const user = { */
/*         name: result.user.displayName, */
/*         email: result.user.email, */
/*         email_verified: result.user.emailVerified,
        photo: result.user.photoURL,
        phone: result.user.phoneNumber,
        meta: result.user.metadata.lastSignInTime,
        googleId: result.user.uid */
/*       } */



/* if(dispatch(loginActionGoogle("luisfactums@gmail.com"))){
  navigate("/welcome")
  console.log("hecho")
}else{
  console.log("nada")
}
    } catch (error) {
       const user = {
         name: null,
       };
        localStorage.setItem("user", JSON.stringify(user));
      console.error("error");
      setError(true)
    }
  
  }


  return {signInWithGoogle}
}
 */
export default function useFirebase(setError) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          const email = result.user.email;

          // Agregar un retraso de 3 segundos antes de llamar a la acción de Redux

          //legal
          //dispatch(loginActionGoogle(email))
          //success force
            dispatch(loginActionGoogle("luisfactum@gmail.com"))
            //error force
            //dispatch(loginActionGoogle("luisfactums@gmail.com"))
              .then((response) => {
                if (response.payload && response.payload.status === 200) {
                  // La solicitud fue exitosa, lo que podría indicar que el usuario está registrado.
                  navigate("/welcome");
                  console.log("Inició sesión con éxito");
                }
                if(response.response.status === 401) {
                  // La solicitud no fue exitosa o el usuario no está registrado.
                  console.log("El usuario no está registrado o la solicitud falló");
                }
              })
          
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

