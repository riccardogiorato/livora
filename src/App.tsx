import React, { useState } from "react";
import "./App.css";

import IntroLogo from "./components/IntroLogo";
import Logo from "./components/logo";

function App() {
  const [logo, SetLogo] = useState(<IntroLogo />);
  setTimeout(() => {
    SetLogo(
      <span>
        <Logo />
      </span>
    );
  }, 1000);

  return <div className="App">{logo}</div>;
}

export default App;
