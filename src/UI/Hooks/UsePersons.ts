import {useEffect, useState} from "react";
import useSWR from "swr";
import {Person, Persons} from "../../Domain/Person";

export interface UsePersonsState {
    persons: undefined | Persons;
    filter: (lastname?: undefined | string) => void;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const usePersons = (): UsePersonsState => {
    const [state, setState] = useState<Omit<UsePersonsState, 'filter'>>({persons: undefined});
    const { data } = useSWR<Person[]>('api/mock-api/data.json', fetcher);

    const ask: UsePersonsState['filter'] = async (lastname) => {
        const persons = new Persons(data || [], lastname);

        setState({
            persons,
        });
    };

    useEffect(() => {
        if (undefined !== data) {
            ask()
        }

        // eslint-disable-next-line
    }, [data]);

    return {
        ...state,
        filter: ask,
    };
}

