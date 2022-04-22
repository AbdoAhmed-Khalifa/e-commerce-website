import { confirmPasswordReset } from "firebase/auth";
import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";
import "./sign-in-form-style.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";
import { async } from "@firebase/util";
const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signAuthUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("wrong Email ");
          break;

        default:
          alert("enter a Right Email");
          break;
      }
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-contianer">
          <Button type="submit">Sign IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign IN
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
