import React from "react";

export const Create = () => {
  return (
    <section className="container-create">
      <form>
        <label htmlFor="name">NAME</label>
        <input type="text" name="name" required />
      </form>
    </section>
  );
};
