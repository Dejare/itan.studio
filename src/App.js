import Loader from "./components/Loader";
import React, { useState } from "react";
import Main from "./components/Main";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="App">
      {!showMain && <Loader setShowMain={setShowMain} />}
      {showMain && <Main />}
    </div>
  );
}

export default App;
