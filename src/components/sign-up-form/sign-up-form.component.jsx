import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getAuthUserPhoneNumber,
  updateAuthUserProfile,
} from "../../utils/firebase/firebase.utils";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { SignUpContainer } from "./sign-up-form.styles";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

const SignUpForm = ({ onLoginSuccess }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState({}); // Add errors state
  const { displayName, email, password, confirmPassword, phoneNumber } =
    formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setErrors({}); // Reset errors state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrors({
        confirmPassword:
          "Hasła nie są identyczne. Upewnij się, że oba pola zawierają to samo hasło.",
      });
      return;
    }

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await updateAuthUserProfile(
        userCredential.user,
        displayName,
        phoneNumber
      );

      await getAuthUserPhoneNumber(userCredential.user);

      onLoginSuccess(); // Call the onLoginSuccess callback
      navigate("/mojekonto"); // Redirect to the welcome screen

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors({
          email:
            "Konto z tym adresem e-mail już istnieje. Zaloguj się używajac tego adresu email.",
        });
      } else {
        console.log("Błąd w tworzeniu użytkownika, spróbuj jeszcze raz", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <SignUpContainer>
      <h2>Nie masz jeszcze konta?</h2>
      <span>Zarejestruj się przy użyciu adresu e-mail i hasła</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Imię"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          error={errors.displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          error={errors.email}
        />

        <FormInput
          label="Hasło"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$"
          instruction="Hasło musi zawierać co najmniej 8 znaków, w tym małe/duże litery, cyfry i znaki specjalne, takie jak !@#$%^&*()-_=+{};:,<.>"
          error={errors.password}
        />

        <FormInput
          label="Potwierdź hasło"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          error={errors.confirmPassword}
        />

        <FormInput
          label="Numer telefonu"
          type="tel"
          required
          onChange={handleChange}
          name="phoneNumber"
          value={phoneNumber}
          pattern="\d{3} \d{3} \d{3}"
          placeholder="123 456 789"
          instruction="Wprowadź swój numer telefonu w formacie 123 456 789."
          error={errors.phoneNumber}
        />

        <Button type="submit">Zarejestruj się</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
