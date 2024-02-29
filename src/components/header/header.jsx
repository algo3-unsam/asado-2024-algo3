/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Typography } from "@mui/material"


export const Header = ({ title }) => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
}

