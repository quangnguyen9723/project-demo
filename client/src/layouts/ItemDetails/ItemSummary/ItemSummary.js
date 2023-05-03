import { Button, MenuItem, Select, Typography } from "@mui/material";
import { CategoryInfo } from "../CategoryInfo/CategoryInfo";
import { Paper } from "@material-ui/core";
import moment from "moment/moment";
import * as api from "../../../api";
import {useContext} from "react";
import {UserContext} from "../../../hooks/context/UserContext";


export const ItemSummary = ({ id, itemData, setItemData }) => {
    const [selectedUser] = useContext(UserContext);

    const handleSubmit = async (e, action, location) => {
        e.preventDefault();
        const submitData = {
            user: selectedUser.name, location: location, action: action, timestamp: moment().toISOString()
        }
        // console.log(submitData);
        try {
            const { data } = await api.updateItem(id, submitData);
            console.log(data);
            setItemData(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (<Paper
        variant='outlined'
        style={{
            padding: '2em',
            border: '.1em solid lightgrey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {/* itemData name */}
        <Typography variant='h5' align='center' style={{ letterSpacing: '.07rem' }}>
            Item Name: <br />
            <b>{itemData?.name}</b> <br />
        </Typography>
        {/* action button */}
        <Button
            variant='contained'
            disabled={itemData.current_location === 'N/A'}
            onClick={(e) => handleSubmit(e, itemData?.action_main_2, null)}
            sx={{ bgcolor: '#4a90ff', minWidth: '14vw', minHeight: '4em', borderRadius: '10px', marginY: '5vh' }}>
            <Typography variant='h6' fontWeight='bold' sx={{ letterSpacing: '.07rem' }}>
                {itemData.current_location === 'N/A' ? itemData.action_main_2 : itemData.action_main_1}
            </Typography>
        </Button>

        {/* solution and current location */}
        <CategoryInfo
            category={'Solution'}
            info={itemData?.solution}
        />
        <CategoryInfo
            category={'Current Location'}
            info={itemData?.current_location}
            style={{ paddingTop: '1em' }}
        />

        {/* location dropdown */}
        <Select
            disabled={itemData.current_location === 'N/A'}
            onChange={(e) => handleSubmit(e, itemData?.action_location_2, e.target.value)}
            displayEmpty
            sx={{
                minWidth: '14vw',
                paddingX: '1em',
                marginTop: '8vh',
                border: '3px solid #4a90ff',
                borderRadius: '10px',
                color: '#4a90ff'
            }}
            renderValue={() => (<Typography variant='h6' fontWeight='bold'
                sx={{ letterSpacing: '.07rem' }}>{itemData?.action_location_1}</Typography>)}
        >
            {itemData?.location_list?.map((location, i) => {
                return (
                    <MenuItem value={location} key={i}>
                        <Typography variant='h5' sx={{ letterSpacing: '.07rem' }}>{location}</Typography>
                    </MenuItem>);
            })}
        </Select>
    </Paper>)
}
