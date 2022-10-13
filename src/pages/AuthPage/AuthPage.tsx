import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classes from "./AuthPage.module.scss";
import { LoginForm, SignUpForm } from "../../components";
import { HOME_PAGE, LOGIN_PAGE, REGISTRATION_PAGE } from "../../routes/path";
import { useAppSelector } from "../../hooks/useAppSelector";

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
