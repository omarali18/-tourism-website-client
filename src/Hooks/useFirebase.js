
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()

    // log in by google
    const signInByGoogle = (history, redirect_url) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // sign out
    const handleSignOut = () => {
        setIsLoading(false)
        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        isLoading,
        signInByGoogle,
        handleSignOut
    }
}
export default useFirebase