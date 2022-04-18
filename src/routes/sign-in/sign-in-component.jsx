import { async } from "@firebase/util";
import { Fragment } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <div className="sign-in">
        <h1>Sign In</h1>
        <label>Email</label>
        <input type="email" placeholder="Enter your Email" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button onClick={logGoogleUser}>SignIn With Google </button>
      </div>
    </Fragment>
  );
};
export default SignIn;
