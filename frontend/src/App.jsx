import './App.css'

import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/hello")
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.error(error));
  }, []);

  return (
      <div>
        <h1>React Frontend</h1>
        <h2>{message}</h2>
      </div>
  );
}

export default App;