import React from "react";

import { AppRouter } from "./components";
import { Header, Footer } from "./layout";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
