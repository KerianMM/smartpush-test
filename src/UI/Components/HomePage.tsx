import React from 'react';
import PersonTable from "./PersonTable";
import SearchBar from "./SearchBar";
import {usePersons} from "../Hooks/UsePersons";

const HomePage: React.FC = () => {
    const {persons, filter} = usePersons();

    if (undefined === persons) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <SearchBar filterPersons={filter} />
            <PersonTable persons={persons}/>
        </div>
    )
};

export default HomePage;
