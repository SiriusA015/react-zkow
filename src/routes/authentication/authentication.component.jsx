import React, { useState } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import WelcomeScreen from '../../components/welcomeScreen/welcomeScreen.component';

import {
  AuthenticationContainer,
  Breadcrumbs,
  Crumb,
  FormWrapper
} from './authentication.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedIn } from '../../store/user/user.selector';
import { setLoggedIn } from '../../store/user/user.reducer';

const Authentication = () => {

  const loggedIn = useSelector(selectLoggedIn); 
  const dispatch = useDispatch();

  const handleLoginSuccess = () => {
    // setLoggedIn(true);
    dispatch(setLoggedIn(true));  
  };

  const handleLogout = () => {
    // setLoggedIn(false);
    dispatch(setLoggedIn(false));
  };

  return (
    <AuthenticationContainer>
      <Breadcrumbs>
        <Crumb>
          <a href="/">Sklep</a>
        </Crumb>
        <Crumb>
          <a href="/mojekonto">Moje konto</a>
        </Crumb>
      </Breadcrumbs>
      <FormWrapper>
        {loggedIn ? (
          <WelcomeScreen onLogout={handleLogout} />
        ) : (
          <>
            <SignInForm onLoginSuccess={handleLoginSuccess} />
            <SignUpForm onLoginSuccess={handleLoginSuccess} />
          </>
        )}
      </FormWrapper>
    </AuthenticationContainer>
  );
};

export default Authentication;
