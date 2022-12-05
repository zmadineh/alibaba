import React from 'react'
import { useTheme } from '@emotion/react';
//material
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


//data
import { hlepCardData } from './../../../data/help-card-data';


const HelpCard = () => {
    const theme = useTheme()
    return (
        <Grid xs={12} container item justifyContent={"center"} alignItems={"center"} >
            <Grid container item xs={11} sx={theme => ({ border: "1px solid", borderColor: theme.palette.grey[200] })} bgcolor={"common.white"} borderRadius={5} p={2} gap={2} justifyContent={"center"} alignItems={"center"} boxShadow={1}>
                {hlepCardData.map(item => (
                    <Grid key={item.id} item xs={12} md={3.5} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2px"}>
                        <Grid item sx={theme => ({ color: theme.palette.info[300], backgroundColor: theme.palette.info[100] })} borderRadius={"28px"} py={"8px"} px={"9px"}>
                            {item.icon}
                        </Grid>
                        <Grid item className='taypo' display={"flex"} flexDirection={"column"} sx={{ textAlign: { sx: "right", md: "center" } }} gap={2}>
                            <Grid item sx={theme => ({ color: theme.palette.grey[500] })} >
                                <Typography sx={{ fontSize: 25, fontWeight: 700 }} >{item.title}</Typography>
                            </Grid>
                            <Grid item sx={theme => ({ color: theme.palette.grey[400] })}>
                                <Typography sx={{ fontSize: 18, fontWeight: 600 }} >{item.body}</Typography>
                            </Grid>
                            <Grid item display={"flex"} gap={3} alignItems={"center"} sx={theme => ({ color: theme.palette.secondary.main, justifyContent: { xs: "flex-start", md: "center" }, cursor: "pointer" })}  >
                                <Grid item> <Typography sx={{ fontSize: 18, fontWeight: 500 }}>{item.body2}</Typography></Grid>
                                <Grid item sx={theme => ({ color: theme.palette.secondary.main })}>{item.icon2}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default HelpCard