import {createContext} from "react";
import useItemData from "../state/useItemData";


export const ItemContext = createContext();

export const ItemContextProvider = ({children, id}) => {
    const [itemData, setItemData] = useItemData(id);
    return (
        <ItemContext.Provider value={[id, itemData, setItemData]}>
            {children}
        </ItemContext.Provider>
    )
}