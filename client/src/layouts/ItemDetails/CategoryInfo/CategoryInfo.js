import {Typography} from "@mui/material";

export const CategoryInfo = ({category, info}) => {
    return (
        <>
            <Typography variant='h6' sx={{width: '100%', color: '#9e9e9e', letterSpacing: '.07rem', paddingTop: '2vh'}}>
                {category}
            </Typography>
            <Typography variant='h6' sx={{width: '100%', paddingLeft: '2em', letterSpacing: '.07rem'}}>
                {info}
            </Typography>
        </>)
}
