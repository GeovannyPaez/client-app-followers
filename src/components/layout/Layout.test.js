import React from "react";
import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom/extends-expect';
import { Layout } from ".";

describe("test of component <Layout/>", () => {
  render(
    <Layout>
      <div>this is a children</div>
    </Layout>
  );

  test("is render children", () => {
    screen.getByText("this is a children");
  });
});
