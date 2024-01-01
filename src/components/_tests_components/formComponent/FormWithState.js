import React, { useEffect, useRef, useState } from "react";

function FormComponentWithState() {
  const countRef = useRef(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div>
      <h2>Form with State</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <div>
          <p>
            The component Re-Rendered <span>{countRef.current}</span> times
          </p>
        </div>
      </form>
    </div>
  );
}

export default FormComponentWithState;
