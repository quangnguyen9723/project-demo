import {MenuItem, Box, Typography, FormControl, Select} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import useUsers from "../../hooks/state/useUsers";
import {styled} from "@mui/system";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ArrowDropUp} from "@mui/icons-material";
import {UserContext} from "../../hooks/context/UserContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useContext(UserContext);
    const [users] = useUsers();

    useEffect(() => {
        if (users.length > 0) {
            setSelectedUser(users[0]);
        }
    }, [users, setSelectedUser]);

    const StyledFormControl = styled(FormControl)(() => ({
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
    }));

    const StyledSelect = styled(Select)(() => ({
        minWidth: '20vw', paddingLeft: '1em', paddingRight: '1em', border: '3px solid #4a90ff', borderRadius: '10px'
    }));

    return (
        <Box sx={{marginBottom: '2vh'}}>
            <StyledFormControl>
                <StyledSelect
                    open = {isOpen}
                    onOpen = {() => setIsOpen(true)}
                    onClose = {() => setIsOpen(false)}
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    defaultValue={users[0]}
                    IconComponent={() => (
                        isOpen ? <ArrowDropUp fontSize='large' color='#4a90ff' /> : <ArrowDropDownIcon fontSize='large' color='#4a90ff'/>
                    )}
                    renderValue={(user) => (<>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{letterSpacing: '.08rem'}}
                        >
                            {user?.name}
                        </Typography>
                        <Typography variant="h6" color="grey" sx={{letterSpacing: '.1rem'}}>
                            {user?.role}
                        </Typography>
                    </>)}
                >
                    {users
                        ?.filter((user) => user !== selectedUser)
                        .map((user, index) => {
                            return (<MenuItem value={user} key={index}>
                                <Typography variant="h5" sx={{letterSpacing: '.1rem'}}>
                                    {user?.name}
                                </Typography>
                            </MenuItem>);
                        })}
                </StyledSelect>
            </StyledFormControl>
        </Box>);
}

export default Header;