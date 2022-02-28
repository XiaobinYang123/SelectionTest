import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Dialog from "./Dialog";

export default function Header({ setData }) {
  return (
    <Box sx={{ my: 3, mx: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom variant="h4" component="div">
            Duck Page
          </Typography>
        </Grid>
        <Grid item>
          <Dialog setData={setData} />
        </Grid>
      </Grid>
      <Typography color="text.primary" variant="body2">
        Scientists want understand how ducks are being fed in parks around the
        world. The following table including all the submissions.
      </Typography>
    </Box>
  );
}
