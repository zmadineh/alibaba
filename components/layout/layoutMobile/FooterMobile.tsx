import React from 'react'
import { useState,useEffect } from "react"
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeSVG from "../../../public/svg/home-icon.svg"
import FooterDialogLogin from "./FooterDialogLogin"

const FooterMobile = () => {
  const [display, setDisplay] = useState<string>("none")
  useEffect(() => {
    window.addEventListener("scroll", e => {
      const scrolled: number | undefined = window?.scrollY;
      if (scrolled) {
        if (scrolled >= 15) {
          setDisplay("block")
        } else {
          setDisplay("none")
        }
      }
    })

  }, [])
  return (
    <Grid display={display}>
      <Grid width={"100%"} height={53} alignItems={"center"} justifyContent={" space-around"} position={"fixed"} bgcolor={'common.white'} sx={{ zIndex: 2, bottom: 0, right: 0, left: 0, display: { xs: "flex", md: "none" }, boxShadow: '0px 0px 5px 3px #00000036' }}>
        <Button sx={{ color: "common.black", '&:hover': { color: "secondary.300" } }} >
          <Link href={"/"}>
            <Grid item display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <HomeSVG />
              <Typography sx={{ fontSize: 12 }}>خانه</Typography>
            </Grid>
          </Link>
        </Button>
        <Grid item>
      <FooterDialogLogin/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FooterMobile