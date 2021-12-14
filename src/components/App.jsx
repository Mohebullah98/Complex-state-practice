import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "fName")
      setContact({ fName: value, lName: contact.lName, email: contact.email });
    if (name === "lName")
      setContact({ fName: contact.fName, lName: value, email: contact.email });
    if (name === "email")
      setContact({ fName: contact.fName, lName: contact.lName, email: value });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleInput}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleInput}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleInput}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
