import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    signInAuthUserEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserEmailAndPassword(
                email,
                password
            );

            console.log(response);
            console.log('succes');
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorret password');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                ></FormInput>
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                ></FormInput>
                <div className="buttons-container">
                    <Button buttonType="" type="submit">
                        Sign In
                    </Button>
                    <Button
                        type="button"
                        buttonType="google"
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
