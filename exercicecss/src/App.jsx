import { useState } from "react";
import "./style.scss";
import MusicCards from "./components/musiccard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MusicCards />
    </div>
  );
}

export default App;
