import React, {createContext} from "react";
import useSelectedUser from "../state/useSelectedUser";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [selectedUser, setSelectedUser] = useSelectedUser();
    return (
        <UserContext.Provider value={[selectedUser, setSelectedUser]}>
            {children}
        </UserContext.Provider>
    )
}