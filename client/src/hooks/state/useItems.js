import {useState, useEffect} from 'react';
import * as api from '../../api';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const {data} = await api.fetchItems();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchItems();
    }, []);

    return [items, setItems];
};

export default useItems;
