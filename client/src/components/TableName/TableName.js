import {Typography} from "@mui/material";

export const TableName = ({title, subtitle}) => {
    if (!title && !subtitle)
        return null;

    return (<Typography component="div">
            <Typography variant="h5" component="span" fontWeight="bold" sx={{letterSpacing: '.07rem'}}>
                {title}
            </Typography>
            <Typography variant="h6" component="span" fontStyle="italic" color='grey'
                        sx={{letterSpacing: '.07rem', marginLeft: '1em'}}>
                {subtitle}
            </Typography>
        </Typography>)
}
