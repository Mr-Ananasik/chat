import MainFrame from "./MainFrame";
import React, { useState } from "react";
import AuthForm from "./AuthForm";

function App() {

  const [isValid, setIsValid] = useState(false);
  const [user, setUser] = useState('');
  const auth = () => {
    setIsValid(true)
  }

  return (
    <div>
      {isValid ? (
          <MainFrame user={user} />
      ) : (
          <AuthForm auth={auth} user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
