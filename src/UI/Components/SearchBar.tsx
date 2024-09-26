import React, {useState} from 'react';
import {UsePersonsState} from "../Hooks/UsePersons";

type SearchBarComponent = React.FC<{ filterPersons: UsePersonsState['filter'] }>;

const SearchBar: SearchBarComponent = ({ filterPersons }) => {
    const [lastname, setLastname] = useState('');

    const lastnameChanged = (newLastname: string) => {
        if (newLastname !== lastname) {
            setLastname(newLastname);
            filterPersons(0 === newLastname.length ? undefined : newLastname);
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search by lastname"
                value={lastname}
                onChange={(e) => lastnameChanged(e.target.value)}/>
        </div>
    )
};

export default SearchBar;
