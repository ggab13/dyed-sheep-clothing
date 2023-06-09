import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogeUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogeUser}> Sign in with Google Popup</button>
        </div>
    );
};
export default SignIn;
