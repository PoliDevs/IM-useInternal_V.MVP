import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginActionGoogle } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import imagenDefecto from '../assets/imenu_logo.jpg';

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
          localStorage.setItem(
            'token',
            JSON.stringify(result.user.accessToken)
          );
          dispatch(loginActionGoogle(email)).then((response) => {
            if (response.payload && response.payload.status === 200) {
              // La solicitud fue exitosa, lo que podría indicar que el usuario está registrado.
              navigate("/dashboard");
              /*   console.log("Inició sesión con éxito"); */
            }
            if (response.response && response.response.status === 401) {
              // La solicitud no fue exitosa o el usuario no está registrado.
              navigate('/welcome');
              /*                 console.log(
                  "El usuario no está registrado o la solicitud falló"
                ); */
            }
          });
        } else {
          /*console.log(new Error());*/
          /* console.log("Inicio de sesión con Google cancelado o fallido"); */
        }
      })
      .catch((error) => {
      /*  console.log(error);*/
        /* console.error("Error al iniciar sesión con Google:", error); */
        setError(true);
      });
  };
  return { signInWithGoogle };
}

export const storage = getStorage(app);

export async function uploadFile(file, name) {
  const storageRef = ref(storage, name);
  return await uploadBytes(storageRef, file);
}

export async function getFileDownloadURL(fileName) {
  const fileRef = ref(storage, fileName);

  try {
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    // Manejar el error (puede ser que el archivo no exista)
   /* console.error('Error al obtener la URL de descarga:', error);*/
    return imagenDefecto;
  }
}
