import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonItem from "./PersonItem";

test('renders item', () => {
  render(
      <table>
        <tbody>
          <PersonItem person={{
            "id": "6286ba99d2c7f1e9057114b4",
            "lastname": "Rasmussen",
            "firstname": "Cathy",
            "age": 42,
            "city": "Wyoming",
            "address": "Anchorage Place"
          }}/>
        </tbody>
      </table>
  );

  const id = screen.getByText(/6286ba99d2c7f1e9057114b4/i);
  expect(id).toBeInTheDocument();

  const lastname = screen.getByText(/Rasmussen/i);
  expect(lastname).toBeInTheDocument();

  const firstname = screen.getByText(/Cathy/i);
  expect(firstname).toBeInTheDocument();

  const age = screen.getByText(/42/i);
  expect(age).toBeInTheDocument();

  const city = screen.getByText(/Wyoming/i);
  expect(city).toBeInTheDocument();

  const address = screen.getByText(/Anchorage Place/i);
  expect(address).toBeInTheDocument();
});
