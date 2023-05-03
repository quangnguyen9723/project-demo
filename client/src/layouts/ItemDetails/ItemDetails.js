import {Grid} from '@material-ui/core'
import {useParams} from 'react-router-dom';

import useItemData from "../../hooks/state/useItemData";
import {LocationHistory} from './LocationHistory/LocationHistory';
import {ActionHistory} from './ActionHistory/ActionHistory';
import {ItemSummary} from "./ItemSummary/ItemSummary";

export const ItemDetails = () => {
    const {id} = useParams();
    const [itemData, setItemData] = useItemData(id);

    return (
        <Grid container spacing={6} sx={{paddingTop: '10vh'}}>
            <Grid item xs={4}>
                <ItemSummary
                    id={id}
                    itemData={itemData}
                    setItemData={setItemData}
                />
            </Grid>
            <Grid item xs={8}>
                <LocationHistory item={itemData}/>
                <ActionHistory item={itemData}/>
            </Grid>
        </Grid>
    )
}
