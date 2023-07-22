import React from "react";

export const PasswordList = ({ passwords }) => {
  if (!passwords.length) {
    return null;
  }

  return (
    <>
      <h2>Password List</h2>
      <ul>
        {passwords.map((pass) => (
          <li key={pass}>{pass}</li>
        ))}
      </ul>
    </>
  );
};
