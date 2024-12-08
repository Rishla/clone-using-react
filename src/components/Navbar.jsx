import React, { useState } from 'react'
import Logo from "../assets/Logo.svg"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function Navbar() {
    const [openMenu,setOpenMenu]=useState(false)
    const menuOptions = [
        {
          text: "Home",
          icon: <HomeIcon />,
        },
        {
          text: "About",
          icon: <InfoIcon />,
        },
        {
          text: "Testimonials",
          icon: <CommentRoundedIcon />,
        },
        {
          text: "Contact",
          icon: <PhoneRoundedIcon />,
        },
        {
          text: "Cart",
          icon: <ShoppingCartRoundedIcon />,
        },
      ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>

      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>


{/* for  hamburger menu icon */}

      <div className="navbar-menu-container">
 {/* <HiOutlineBars3 />: This is an icon from HeroIcons library, specifically a hamburger menu icon */}
        < HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

 {/* <Drawer />: This is a Material-UI (MUI) component that creates a sliding drawer on the screen */}
 {/* anchor="right": The anchor prop specifies from which side of the screen the drawer will slide */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
{/* <Box />: This is a layout component from Material-UI, commonly used for wrapping and styling content. */}
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >

  {/* <List />: This is a Material-UI component used to display a list of items. */}
          <List>
            {menuOptions.map((item) => (

 // <ListItem />: Each ListItem is a single entry in the list. The key prop helps React track items for efficient rendering
              <ListItem key={item.text} disablePadding>

  {/* <ListItemButton />: This makes the entire list item clickable, which could be used for navigation or triggering actions. */}

                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>

              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar