import React from 'react';
import {Person} from "../../Domain/Person";

type PersonItemComponent = React.FC<{ person: Person }>;

const PersonItem: PersonItemComponent = ({ person }) => (
    <tr>
        <td>{person.id}</td>
        <td>{person.firstname}</td>
        <td>{person.lastname}</td>
        <td>{person.age}</td>
        <td>{person.city}</td>
        <td>{person.address}</td>
    </tr>
);

export default PersonItem;
