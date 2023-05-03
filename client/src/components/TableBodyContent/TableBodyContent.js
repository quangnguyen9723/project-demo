import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Box} from "@mui/material";

export const TableBodyContent = () => {

    // console.log(columns)
    // console.log(rows)

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 150 },
    ];

    const rows = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
    ];


    return (
            <Box style={{ height: 400, width: "100%" }}>
                <DataGrid rows={rows} columns={columns} />
            </Box>
        // <TableBody>
        //     {
        //         rows?.map((row, i) => (
        //             <TableRow key={i} onClick={null}>
        //                 {
        //                     columns?.map((column, j) => (
        //                         <StyledTableCell key={j}>
        //                             hmm
        //                         </StyledTableCell>
        //                     ))
        //                 }
        //             </TableRow>
        //         ))
        //     }
        // </TableBody>
    )
}