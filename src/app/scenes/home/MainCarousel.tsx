import React from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import { SxProps, Theme } from '@mui/material/styles';

export type IMainCarouselProps = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

declare global {
    interface NodeRequire {
        context: (
            directory: string,
            useSubdirectories: boolean,
            regExp: RegExp
        ) => any;
  }
}


const importAll = (r:any) =>
  r.keys().reduce((acc:any, item:any) => {
    acc[item.replace("../../", "")] = r(item);
    return acc;
  }, {});

  export const heroTextureImports = importAll(
  require.context("../../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel: React.FC<IMainCarouselProps> = ({ sx = [], children }) => {
  const isNonMobile: any = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, _hasPrev, _label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, _hasNext, _label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture:any, index) => (
        <Box key={`carousel-image-${index}`}>
          <Image
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
}

export { MainCarousel };