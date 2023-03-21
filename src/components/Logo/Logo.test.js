import React from "react";
import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom/extends-expect';
import { Logo } from ".";

test("logo is render", () => {
  render(<Logo />);
  //
  screen.getByTitle("logo-followersapp");
});
