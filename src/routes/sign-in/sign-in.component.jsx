import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    // }, []);

    const logGoogeUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    };

    // const logGoogeRedirectUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     console.log({ user });
    // };

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogeUser}> Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    );
};
export default SignIn;
