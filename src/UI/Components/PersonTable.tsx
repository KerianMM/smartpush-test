import React from 'react';
import {Persons} from "../../Domain/Person";
import PersonItem from "./PersonItem";

type TableBodyComponent = React.FC<{ persons: Persons }>;
const TableBody: TableBodyComponent = ({persons}) => {
    if (persons.isEmpty()) {
        return (
            <tr>
                <td colSpan={6}>No matching result</td>
            </tr>
        );
    }

    return (
        <>
            {persons.items().map(person => (
                <PersonItem person={person} key={person.id}/>
            ))}
        </>
    )
}

type PersonTableComponent = React.FC<{ persons: Persons }>;
const PersonTable: PersonTableComponent = ({persons}) => (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>City</th>
                <th>Address</th>
            </tr>
        </thead>

        <tbody>
            <TableBody persons={persons}/>
        </tbody>
    </table>
);

export default PersonTable;
