import {TableContainer, Table, TableRow, Paper, TableBody} from '@mui/material';
import moment from 'moment';
import {useState} from 'react';
import TableHeadContent from "../../../components/TableHeadContent/TableHeadContent";
import {TableName} from "../../../components/TableName/TableName";
import {StyledTableCell} from "../../../components/StyledTableCell/StyledTableCell";


export const ActionHistory = (props) => {
    const {item} = props;
    const [selecteduser, setSelectedUser] = useState('');


    const columns = [
        {id: 'user', label: 'User'},
        {id: 'action', label: 'Action'},
        {id: 'timestamp', label: 'Timestamp'}
    ];

    const cellStyle = {
        width: 100 / columns.length + '%',
        paddingLeft: '5rem'
    };

    const handleClick = (user) => {
        if (selecteduser === user) {
            setSelectedUser('');
            return;
        }
        setSelectedUser(user);
    }

    return (
        <>
            <TableName title={'Action History'} subtitle={'Last 6 actions'}/>
            <TableContainer component={Paper} sx={{marginTop: '1em'}}>
                <Table sx={{width: '100%'}} stickyHeader>
                    <TableHeadContent columns={columns} cellStyle={cellStyle}/>
                    <TableBody>
                        {item?.action_history?.map((action, i) => (
                            <TableRow
                                key={i} hover
                                onClick={() => handleClick(action.user)}
                                sx={{bgcolor: selecteduser === action.user ? '#e0e0e0' : null}}
                            >
                                <StyledTableCell cellStyle={cellStyle} underline={true} content={action.user}/>
                                <StyledTableCell cellStyle={cellStyle} content={action.action}/>
                                <StyledTableCell cellStyle={cellStyle}
                                                 content={moment(action.timestamp).format('h:mm A MMM D')}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
