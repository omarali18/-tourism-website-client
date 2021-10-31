
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()

    // log in by google
    const signInByGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     // history.push(redirect_url)
        // })
        // .catch(error => {
        //     console.log(error.message);
        // })
    }

    // sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {
                // An error happened.
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        signInByGoogle,
        handleSignOut
    }
}
export default useFirebase