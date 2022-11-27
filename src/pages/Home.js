import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuth } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/UI/Modal/Modal';
const REDIRECT_PAGE = '/flavors';
// Configure FirebaseUI.
const uiConfig = {
    signInFlow: 'popup', // popup sign-in flow rather than redirect flow
    signInSuccessUrl: REDIRECT_PAGE,
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID,
    ],
};
const Home = () => {
    const { authUser, isLoading } = useAuth();
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    // Redirect if finished loading and there's an existing user (user is logged in)
    useEffect(() => {
        if (!isLoading && authUser) {
            navigate(REDIRECT_PAGE);
        }
    }, [authUser, isLoading]);

    return (
        <main>
            <h1>Welcome Page</h1>
            <p>Learn more about our ice cream flavors</p>
            <button onClick={() => setLogin(true)}>Login / Register</button>
            {login && (
                <Modal onClose={() => setLogin(false)}>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={auth}
                    />
                </Modal>
            )}
        </main>
    );
};

export default Home;
