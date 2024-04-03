import { Box, Card, CardContent, Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";
import React, { forwardRef } from "react";
import Image from "next/image";
import handWrritings from "../../public/handWrriting.png";
import glitters from "../../public/glitters.png";

const Story = forwardRef(({ imagesArray, bodyText, headline, isMain }, ref) => {
  //STYLES
  const paperStyle = {
    padding: 3,
    display: "flex",
    direction: "rtl",
    position: "relative",
  };
  const boxStyle = { padding: 4 };
  const pStyles = { width: "100%", fontSize: "18px" };
  const imgStyle = { maxWidth: "25vw", borderRadius: "7px" };
  const imageGridStyle = { alignSelf: "center" };

  const imgSrc = imagesArray ? imagesArray[0]?.url : "";

  return (
    <Grid
      container
      width={isMain ? "100%" : "70%"}
      margin={"auto"}
      my={4}
      direction={"column"}
    >
      <Paper elevation={isMain ? 0 : 2} sx={paperStyle}>
        <Grid item>
          <Box sx={boxStyle}>
            <Card variant={"plain"}>
              <CardContent>
                <p style={pStyles}>
                  {bodyText?.split("\n")?.map((text, idx) => {
                    return (
                      <span key={idx}>
                        {text}
                        <br />
                      </span>
                    );
                  })}
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        {isMain ? (
          <>
            <Image
              src={handWrritings}
              style={{
                width: "10%",
                height: "50%",
                marginTop: "19%",
                position: "absolute",
                left: "40%",
              }}
              alt="Picture of the author"
            />
            <Image
              src={glitters}
              style={{
                width: "25%",
                height: "50%",
                marginTop: "19%",
                position: "absolute",
                top: "-67%",
                right: "-5%",
              }}
              alt="Picture of the author"
            />
            <Image
              src={glitters}
              style={{
                width: "30%",
                height: "50%",
                marginTop: "19%",
                position: "absolute",
                left: "-10%",
                bottom: "-20%",
              }}
              alt="Picture of the author"
            />
          </>
        ) : null}
        <Grid item sx={imageGridStyle} mr="auto">
          <Typography
            variant="h4"
            align="center"
            sx={{ pb: 2, fontWeight: "bolder", fontSize: "35px" }}
          >
            {headline}
          </Typography>
          <img style={imgStyle} src={imgSrc} alt="Image"></img>
        </Grid>
      </Paper>
    </Grid>
  );
});

export default Story;
