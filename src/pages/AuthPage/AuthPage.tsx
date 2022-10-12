import React from "react";
import { useLocation } from "react-router-dom";

import classes from "./AuthPage.module.scss";
import { LoginForm, SignUpForm } from "../../components";
import { LOGIN_PAGE, REGISTRATION_PAGE } from "../../routes/path";

const AuthPage = () => {
  const { pathname } = useLocation();
  return (
    <div className={classes.authWrapper}>
      {pathname === REGISTRATION_PAGE ? <SignUpForm /> : <LoginForm />}

      <div className={classes.authPoster} />
      <div className={classes.authPoster2} />
    </div>
  );
};

export default AuthPage;
