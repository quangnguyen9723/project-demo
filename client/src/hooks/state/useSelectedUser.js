import { useState } from 'react';

const useSelectedUser = () => {
    const [selectedUser, setSelectedUser] = useState({ name: '', role: '' });

    return [ selectedUser, setSelectedUser ];
};

export default useSelectedUser;
