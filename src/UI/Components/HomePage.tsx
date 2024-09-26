import React, {useEffect, useState} from 'react';
import PersonTable from "./PersonTable";
import SearchBar from "./SearchBar";
import {usePersons} from "../Hooks/UsePersons";

const HomePage: React.FC = () => {
    const {persons, filter} = usePersons();
    const [notified, setNotified] = useState(false)

    useEffect(() => {
        if (undefined !== persons) {
            setNotified(true);

            setTimeout(() => {
                setNotified(false);
            }, 10000)
        }
    }, [persons])

    if (undefined === persons) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            {notified && (
                <div style={{ backgroundColor: 'red', padding: '12px' }}>🚀 Incredible ! Persons data are loaded 🚀</div>
            )}
            <SearchBar filterPersons={filter} />
            <PersonTable persons={persons}/>
        </div>
    )
};

export default HomePage;
