import {TableCell, Typography} from "@mui/material";

export const StyledTableCell = ({cellStyle, underline, content}) => {
    return (
        <TableCell sx={cellStyle}>
            <Typography variant="h6"
                        sx={{
                            letterSpacing: '.07rem',
                            textDecoration: underline ? 'underline' : null
                        }}>{content}</Typography>
        </TableCell>
    )
}


