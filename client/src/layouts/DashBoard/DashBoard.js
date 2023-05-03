import {TableContainer, Table, TableBody, Paper} from "@mui/material";
import {useState} from "react";
import {ItemRow} from "../../components/ItemRow/ItemRow";
import TableHeadContent from "../../components/TableHeadContent/TableHeadContent";
import useItems from "../../hooks/state/useItems";
import {TableName} from "../../components/TableName/TableName";

export const DashBoard = () => {
    const [selectedSol, setSelectedSol] = useState('');
    const [items] = useItems();

    const columns = [
        {id: 'item', label: 'Item'},
        {id: 'solution', label: 'Solution'},
        {id: 'current_location', label: 'Location'},
        {id: 'action', label: ''},
    ];

    const cellStyle = {
        width: 100 / columns.length + '%',
        paddingLeft: '5rem'
    };

    return (
        <>
            <TableName title={'Item Table'} />
            <TableContainer component={Paper} sx={{marginTop: '2vh'}}>
                <Table sx={{width: '100%'}} stickyHeader>
                    <TableHeadContent columns={columns} cellStyle={cellStyle} />
                    <TableBody>
                        {items?.map((item, i) => (
                            <ItemRow key={i} item={item} selectedSol={selectedSol} setSelectedSol={setSelectedSol}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}