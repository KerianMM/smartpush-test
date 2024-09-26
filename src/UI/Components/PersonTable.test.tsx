import React from 'react';
import {render, screen} from '@testing-library/react';
import PersonTable from "./PersonTable";
import {Persons} from "../../Domain/Person";

test('renders items', () => {
    render(
        <PersonTable persons={new Persons([
            {
                "id": "6286ba99d2c7f1e9057114b4",
                "lastname": "Rasmussen",
                "firstname": "Cathy",
                "age": 42,
                "city": "Wyoming",
                "address": "Anchorage Place"
            },
            {
                "id": "6286ba99131f644e5eb1965b",
                "lastname": "Brock",
                "firstname": "Kent",
                "age": 77,
                "city": "Hessville",
                "address": "Driggs Avenue"
            }
        ])}/>
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


    const id2 = screen.getByText(/6286ba99131f644e5eb1965b/i);
    expect(id2).toBeInTheDocument();

    const lastname2 = screen.getByText(/Brock/i);
    expect(lastname2).toBeInTheDocument();

    const firstname2 = screen.getByText(/Kent/i);
    expect(firstname2).toBeInTheDocument();

    const age2 = screen.getByText(/77/i);
    expect(age2).toBeInTheDocument();

    const city2 = screen.getByText(/Hessville/i);
    expect(city2).toBeInTheDocument();

    const address2 = screen.getByText(/Driggs Avenue/i);
    expect(address2).toBeInTheDocument();


    const noResults = screen.queryByText('No matching result');
    expect(noResults).not.toBeInTheDocument();
});

test('renders no items', () => {
    render(
        <PersonTable persons={new Persons([])}/>
    );

    const noResults = screen.getByText(/No matching result/i);
    expect(noResults).toBeInTheDocument();
});
