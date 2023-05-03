import {useState, useEffect} from 'react';
import * as api from '../../api';

const useItemData = (id) => {
    const [itemData, setItemData] = useState({});

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const {data} = await api.getItem(id);
                setItemData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchItem();
    }, []);

    return [itemData, setItemData];
};

export default useItemData;
