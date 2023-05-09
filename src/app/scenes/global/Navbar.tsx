import React from "react";
import { Badge, Box, IconButton } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { shades } from "../../../utils/theme";
import Image from "next/image";
import Logo from "../../../assets/logo/berberwool.png"  

export type INavbarProps = { }
   export const Navbar:  React.FC<INavbarProps> = () => {
    const router = useRouter();

    return (
      <Box
        sx={{
            display:"flex",
            alignItems:"center",
            width:"100%",
            height:"60px",
            backgroundColor:"rgba(255, 255, 255, 0.95)",
            color:"black",
            position:"fixed",
            top:"0",
            left:"0",
            zIndex:"1",
        }}
      >
        <Box
          sx={{
            width:"80%",
            margin:"auto",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
          }}
          >
        <Box
          onClick={() => router.push("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
           <Image
            src={Logo}
            alt="logo"
            style={{
              width: "10%",
              height: "150px",
              objectFit: "contain",
              backgroundAttachment: "fixed",
              position: "absolute",
              top: "-55%"
            }}
          />
        </Box>
        <Box
            display="flex"
            justifyContent="space-between"
            columnGap="20px"
            zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
          <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
          <PersonOutline />
          </IconButton>
        <Badge
          color="secondary"
          sx={{
          "& .MuiBadge-badge": {
          right: 5,
          top: 5,
          padding: "0 4px",
          height: "14px",
          minWidth: "13px",
          },
          }}
        >
          <IconButton sx={{ color: "black" }}>
          <ShoppingBagOutlined />
          </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
          <MenuOutlined />
          </IconButton>
          </Box>
        </Box>
      </Box>
    );
 }

