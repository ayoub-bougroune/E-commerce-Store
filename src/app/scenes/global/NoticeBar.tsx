import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from"./global.module.css";


export type INoticeBarProps = { }
export const NoticeBar:  React.FC<INoticeBarProps> = () => {
    return (
        <div className={styles.noticeBar}>
            <p>This is a notice message.</p>
        </div>
    //   <Box
    //     sx={{
    //         display:"flex",
    //         alignItems:"center",
    //         width:"100%",
    //         height:"60px",
    //         backgroundColor:"rgba(57, 134, 250, 0.377)",
    //         color:"black",
    //         position:"fixed",
    //         top:"-10",
    //         left:"0",
    //         zIndex:"1",
    //     }}
    //   >
    //   <Typography>
    //     Notice-Bar
    //   </Typography>
    //   </Box>
    );
 }

