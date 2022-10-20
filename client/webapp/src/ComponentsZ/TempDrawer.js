import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from "@mui/material/Typography";

export default function TempDrawer(props) {

return(
    <>
        <Drawer anchor='right'
        open={props.opener}
        onClose={()=> props.setOpener(false)}>
            <Box p={2} width='60vh' role='presentation'>
                <Typography>{props.label}</Typography>
            </Box>
        </Drawer>
    </>
);
}