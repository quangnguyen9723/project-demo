import {TableRow, TableCell, Typography, TableHead} from '@mui/material';

const TableHeadContent = ({columns, cellStyle}) => {
    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        sx={{color: 'white', bgcolor: '#4a90ff', ...cellStyle}}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{letterSpacing: '.07rem'}}
                        >
                            {column.label}
                        </Typography>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
);
};



export default TableHeadContent;
