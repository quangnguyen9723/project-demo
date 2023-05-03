import {useState, useEffect} from 'react';
import * as api from '../../api';

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const {data} = await api.fetchUsers();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    return [users, setUsers];
};

export default useUsers;
