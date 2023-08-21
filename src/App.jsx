import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div
      className={`${theme == "dark" ? "bg-black" : null}`}
    >
      <Header />
      <Home />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
