import {TableContainer, Table, TableRow, Paper, TableBody} from '@mui/material';
import moment from 'moment';
import {useState} from 'react';
import TableHeadContent from "../../../components/TableHeadContent/TableHeadContent";
import {TableName} from "../../../components/TableName/TableName";
import {StyledTableCell} from "../../../components/StyledTableCell/StyledTableCell";

export const LocationHistory = (props) => {
    const {item} = props;
    const [selectedLocation, setSelectedLocation] = useState('');


    const columns = [{id: 'location', label: 'Location'}, {id: 'timestamp', label: 'TimeStamp'}];

    const cellStyle = {
        width: 100 / columns.length + '%', paddingLeft: '5rem'
    };

    const handleClick = (location) => {
        if (selectedLocation === location) {
            setSelectedLocation('');
            return;
        }
        setSelectedLocation(location);
    }

    return (<>
        <TableName title={'Location History'} subtitle={'Last 6 locations'}/>
        <TableContainer component={Paper} sx={{marginTop: '1em', marginBottom: '3em'}}>
            <Table sx={{width: '100%'}} stickyHeader>
                <TableHeadContent columns={columns} cellStyle={cellStyle}/>
                <TableBody>
                    {item?.location_history?.map((location, i) => (<TableRow
                        key={i} hover
                        onClick={() => handleClick(location.location)}
                        sx={{bgcolor: selectedLocation === location.location ? '#e0e0e0' : null}}
                    >
                        <StyledTableCell cellStyle={cellStyle} underline={true} content={location.location}/>
                        <StyledTableCell cellStyle={cellStyle}
                                         content={moment(location.timestamp).format('h:mm A MMM D')}/>
                    </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}
