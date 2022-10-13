import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppRouter } from "./components";
import { useAppSelector } from "./hooks/useAppSelector";
import { Header, Footer } from "./layout";
import { LOGIN_PAGE } from "./routes/path";
import { token } from "./utils";

function App() {
  // const navigate = useNavigate();
  // const { isAuth } = useAppSelector(s => s.auth);
  // useEffect(() => {
  //   if (!token || !isAuth) {
  //     navigate(LOGIN_PAGE);
  //   }
  // }, [token, isAuth]);

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
