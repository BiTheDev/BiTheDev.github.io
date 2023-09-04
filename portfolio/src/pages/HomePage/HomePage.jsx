import React from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material";

const StyledDiv = styled("div")({
  height: "100vh",
  background: "linear-gradient(to bottom, #151515 0%, #263238 100%)",
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StyledPaper = styled(Paper)({
  padding: "26px",
  textAlign: "center",
  color: "#FFFFFF",
  background: "rgba(255, 255, 255, 0.1)",
});

const StyledCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.1)",
  color: "#FFFFFF",
});

const HomePage = () => {
  return (
    <StyledDiv>
      <Container maxWidth="md">
        <StyledPaper elevation={10}>
          {/* Top Layer */}
          name
          <Typography variant="subtitle1" gutterBottom>
            [Your Role]
          </Typography>
          <Typography variant="body1" paragraph>
            [A little about yourself]
          </Typography>
          <Divider style={{ margin: "16px 0" }} />

          {/* Second Layer */}
          <Typography variant="h6" gutterBottom>
            Objectives
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">What I'm Looking For</Typography>
                  <Typography variant="body2">
                    [What you're looking for]
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">What I Want To Do</Typography>
                  <Typography variant="body2">[What you want to do]</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
          <Divider style={{ margin: "16px 0" }} />

          {/* Third Layer */}
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Programming</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Database</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Framework</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Clouds</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
          <Divider style={{ margin: "16px 0" }} />

          {/* Last Layer */}
          <Typography variant="h6" gutterBottom>
            Fun Facts & Interests
          </Typography>
          <Typography variant="body1" paragraph>
            [Fun facts and interests]
          </Typography>
          <Divider style={{ margin: "16px 0" }} />
          {/* Contact and Portfolio */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" color="primary">
                View Portfolio
              </Button>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </StyledDiv>
  );
};

export default HomePage;
