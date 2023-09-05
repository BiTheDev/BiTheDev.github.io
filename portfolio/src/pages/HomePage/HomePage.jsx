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
  Box,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material";

import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const StyledDiv = styled("div")({
  background: "linear-gradient(to bottom, #151515 0%, #263238 100%)",
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StyledBox = styled(Box)({
  padding: "26px",
  textAlign: "center",
  color: "#FFFFFF",
});

const StyledCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.1)",
  color: "#FFFFFF",
});

const StyledButton = styled(Button)({
  background: "linear-gradient(to bottom, #151515 0%, #263238 100%)",
  border: "1px solid #FFFFFF",
  color: "#FFFFFF",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
});

const HomePage = () => {
  const navigate = useNavigate();

  const goToEducationAndExperience = () => {
    navigate("/education-and-experience");
  };

  const goToProjects = () => {
    navigate("/projects");
  };
  return (
    <StyledDiv>
      <Container style={{ padding: "30px" }} maxWidth="xl" data-aos="zoom-in">
        <StyledBox>
          {/* Top Layer */}
          <Typography variant="subtitle1" gutterBottom>
            I am a Computer Science Graduate Student, Seeking Software engineer
            and web developer position
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            A little about me
          </Typography>
          <Typography variant="body1" paragraph>
            Highly adaptable and deliberative Computer Science graduate with
            experience in software engineering, seeking a Software Engineer
            position. Adept at generating innovative ideas (Ideation) and
            maximizing the efficacy of solutions. Ready to bring individualized
            approaches to a dynamic team, available for immediate start
          </Typography>
          {/* Second Layer */}
          <Typography variant="h6" gutterBottom>
            Objectives
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    What I'm Looking For
                  </Typography>
                  <Typography variant="body2">
                    <List>
                      <ListItem disableGutters>
                        Seeking a new page of my career in software/web
                        development position in Greater Seattle Area/Remote
                      </ListItem>
                      <ListItem disableGutters>
                        An opportunity to grow with the company and sharpen my
                        skills and knowledge.
                      </ListItem>
                      <ListItem disableGutters>
                        Utilize my skills and knowledge to support the company
                        in growth.
                      </ListItem>
                      <ListItem disableGutters>
                        A career with close connection with development and
                        management team.
                      </ListItem>
                    </List>
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
          {/* Third Layer */}
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Programming</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 3 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    style={{ minHeight: "150px" }}
                  >
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-java-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-csharp-plain-wordmark"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-html5-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-css3-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-javascript-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-python-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "60px" }}
                        class="devicon-typescript-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "60px" }}
                        class="devicon-r-plain colored"
                      ></i>
                    </Box>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Framework & Library</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    style={{ minHeight: "150px" }}
                  >
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-nodejs-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-express-original-wordmark"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-bootstrap-plain-wordmark"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-materialui-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-react-origin colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-spring-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-angularjs-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-dotnetcore-plain"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-socketio-original-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-threejs-original-wordmark colored"
                      ></i>
                    </Box>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Database</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 9 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    style={{ minHeight: "150px" }}
                  >
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-mysql-plain-wordmark"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-postgresql-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-mongodb-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-redis-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "58px" }}
                        class="devicon-firebase-plain-wordmark colored"
                      ></i>
                    </Box>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Clouds</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 6 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    style={{ minHeight: "150px" }}
                  >
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "100px" }}
                        class="devicon-amazonwebservices-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "100px" }}
                        class="devicon-azure-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "100px" }}
                        class="devicon-googlecloud-plain-wordmark colored"
                      ></i>
                    </Box>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
            
            <Grid item xs={12} sm={12}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Tools</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 9 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    style={{ minHeight: "150px" }}
                  >
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-npm-original-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-git-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-github-original colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-vscode-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-visualstudio-plain colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-gradle-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-inkscape-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-photoshop-plain"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-processing-plain-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-tomcat-line-wordmark colored"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "56px" }}
                        class="devicon-jupyter-plain-wordmark colored"
                      ></i>
                    </Box>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>

          {/* Last Layer */}
          <Typography variant="h6" gutterBottom>
            Fun Facts & Interests
          </Typography>
          <Typography variant="body1" paragraph>
            [Fun facts and interests]
          </Typography>
          {/* Contact and Portfolio */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={goToEducationAndExperience}
              >
                Education and Experience
              </StyledButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={goToProjects}
              >
                Projects
              </StyledButton>
            </Grid>
          </Grid>
        </StyledBox>
      </Container>
    </StyledDiv>
  );
};

export default HomePage;
