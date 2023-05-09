/* eslint-disable no-unused-vars */
import React,{ useState } from 'react';
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades, tTheme } from "../../utils/theme";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/reducers";
import Image from 'next/image';
import imgAl from "../../assets/0.png";

export type IItemProps = {
      item: {
      id: number;
      name: string;  
      attributes: {
      category: string;
      price: number;
      name: string;
      image: {
      data: {
        attributes: {
          formats: {
          medium: { url: string };
          };
        };
      };
    };
    };
  };
  width: string;
}
      
export const Item: React.FC<IItemProps> = ({item, width}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme() as tTheme;

  const { category, price, name, image } = item.attributes;
  const {
      data: {
        attributes: {
          formats: {
            medium: { url },
          },
        },
      },
    } = image;

  return (
    <Box width={width}>
      <Box
        sx={{position:"relative"}}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Image
          alt={item.name}
          src={imgAl}
          onClick={() => router.push(`/item/${item.id}`)}
          style={{
            cursor: "pointer",
            width:"30%",
            height:"40%"
          }}
        />
        <Box
         sx={{
          display: isHovered ? "block" : "none",
          position:"absolute",
          bottom:"10%",
          left:"0",
          width:"100%",
          padding:"0 5%",
         }}
        >
          <Box sx={{ display:"flex", justifyContent:"space-between" }}>
            <Box sx={{display:"flex", alignItems:"center", backgroundColor: shades.neutral[100], borderRadius:"3px"}}>
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" style={{ color: "black" }} >
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
}

