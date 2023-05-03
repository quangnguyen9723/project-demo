import {Typography, TableRow, TableCell} from "@mui/material";
import {Link} from "react-router-dom";
import {StyledTableCell} from "../StyledTableCell/StyledTableCell";


export const ItemRow = ({item, selectedSol, setSelectedSol}) => {
    const cellStyle = {
        width: '25%', paddingLeft: '5rem',
    };

    const textStyle = {
        letterSpacing: '.07rem'
    };

    const handleClick = () => {
        setSelectedSol(selectedSol === item['solution'] ? '' : item.solution);
    };


    return (
        <TableRow
            hover onClick={handleClick}
            sx={{backgroundColor: selectedSol === item.solution ? '#e0e0e0' : null}}
        >
            <StyledTableCell cellStyle={cellStyle} underline={false} content={item.name} />
            <StyledTableCell cellStyle={cellStyle} content={item.solution} />
            <StyledTableCell cellStyle={cellStyle} content={item.current_location} />
            <TableCell sx={cellStyle}>
                <Link to={'/items/' + item._id} style={{textDecoration: 'none'}}>
                    <Typography variant="h6" color='primary' underline='none' sx={textStyle}>
                        See Details
                    </Typography>
                </Link>
            </TableCell>
        </TableRow>)
}