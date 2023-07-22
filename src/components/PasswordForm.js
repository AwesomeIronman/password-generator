import React from "react";

export const PasswordForm = ({ charCount, setCharCount, submitHandler }) => {
  return (
    <form className="generator-form" onSubmit={submitHandler}>
      <input
        type="number"
        value={charCount}
        onChange={(e) => setCharCount(e.target.value)}
      />
      <button type="submit">Generate</button>
    </form>
  );
};
