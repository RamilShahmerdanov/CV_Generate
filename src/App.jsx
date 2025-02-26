import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResumeApp from "./components/ResumeApp";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <ResumeApp />
  </>;
}

export default App;
