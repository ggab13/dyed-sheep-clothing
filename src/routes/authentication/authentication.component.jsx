import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
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
        <AuthenticationContainer>
            <SignInForm />

            <SignUpForm />
        </AuthenticationContainer>
    );
};
export default Authentication;
