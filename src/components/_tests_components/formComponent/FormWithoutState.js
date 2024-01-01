import React, { useEffect, useRef } from "react";

function FormWithoutState() {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });

    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }
    console.log(body);
  };
  return (
    <div>
      <h2>Form without State</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
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

export default FormWithoutState;
