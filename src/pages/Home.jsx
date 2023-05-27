import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export function Home() {
  return (
    <div className="">
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Button variant="contained">Hello World</Button>
        </Box>
      </Container>
    </div>
  );
}
