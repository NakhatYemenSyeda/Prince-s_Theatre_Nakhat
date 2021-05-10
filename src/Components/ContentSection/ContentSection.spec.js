import React from 'react';
import ContentSection from "./index";
import {render, screen} from "@testing-library/react";

describe('ContentSection', () => {
    test('renders no content', () => {
  render(<ContentSection />);
  const linkElement = screen.getByText('Something went wrong, please try again!');
  expect(linkElement).toBeInTheDocument();
});
});