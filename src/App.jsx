
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
function App() {
  const [screen, setScreen] = useState("Welcome");

  const changeScreen = (screenName) => {
    setScreen(screenName);
  };
  return (
    <div className="font-sans min-h-screen w-full overflow-x-hidden pt-32  bg-gradient-to-br from-teal-900 via-blue-800 to-indigo-800">
      <Header screenChanger={changeScreen} />
      {screen === "Welcome" && <Welcome />}
      {screen === "About" && <About />}
      {screen === "Skills" && <Skills />}
      {screen === "Projects" && <Project />}
    </div>
  );
}

export default App;
