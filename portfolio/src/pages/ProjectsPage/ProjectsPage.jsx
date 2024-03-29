import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Chip,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { styled } from "@mui/material";

const StyledCard = styled(Card)({
  background: "#263238",
  color: "#FFFFFF",
});

const StyledTimelineItem = styled(TimelineItem)({
  alignItems: "center", // Make the TimelineItem left-aligned
});

const ProjectsPage = () => {
  const projectsData = [
    {
      id: 1,
      title: "BookClub APP",
      description:
        "A Work in progress web application for people to discuss, review and host a book event",
      technologies: ["React", "Material UI", "HTML", "CSS", "JavaScript", "Google API", "MongoDB", "Express.js","Node.js"],
      image: "/images/bookclub.png",
      githubUrl: "https://github.com/BiTheDev/BookclubApp",
      liveDemo: "",
      year: "2023 Oct",
    },
    {
      id: 2,
      title: "Indoor 5G network monitor dashboard",
      description:
        "A demo monitor dashboard built for the 5G network solution project for mars base that allows users to monitor network status and usage",
      technologies: ["React", "Material UI", "HTML", "CSS", "Inkscape"],
      image: "/images/monitordash.png",
      githubUrl: "https://github.com/BiTheDev/MonitorDashboard",
      liveDemo: "https://demo-dashboard-649l.onrender.com/",
      year: "2023 August",
    },
    {
      id: 3,
      title: "MERN Social Media",
      description:
        "A social media project with MERN from web development course hosted on Render",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Material UI",
        "express.js",
        "node.js",
        "MongoDB",
      ],
      image: "/images/socialmedia.png",
      githubUrl: "https://github.com/BiTheDev/MERN_Social_Media",
      liveDemo: "https://brian-ho-project3-social-app.onrender.com",
      year: "2023 May",
    },
    {
      id: 4,
      title: "Wordle game",
      description:
        "Mini wordle game with React from web development course hosted on Render",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Material UI",
      ],
      image: "/images/wordle.png",
      githubUrl: "https://github.com/BiTheDev/React_Wordle",
      liveDemo: "https://brian-ho-project3-social-app.onrender.com",
      year: "2023 April",
    },
    {
      id: 5,
      title: "Mini Tip Calculator app",
      description: "A task management application",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/tipcal.png",
      githubUrl: "https://github.com/BiTheDev/TipCalculator",
      liveDemo: "https://bithedev.github.io/TipCalculator/",
      year: "2022 December",
    },
  ];

  return (
    <Container style={{ padding: "30px" }} maxWidth="xl">
      <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
        My Projects
      </Typography>

      <Timeline position="alternate">
        {projectsData.map((project) => (
          <TimelineItem key={project.id}>
            <TimelineOppositeContent>
              <Typography color="white">{project.year}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <StyledCard>
                <CardActionArea href={project.liveDemo} target="_">
                  <CardMedia
                    component="img"
                    alt={project.title}
                    style={{ minHeight: "320px" }}
                    image={project.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {project.description}
                    </Typography>
                    <div style={{ marginTop: "10px" }}>
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          variant="outlined"
                          size="small"
                          style={{ margin: "5px", color: "white" }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.githubUrl}
                    target="_"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href={project.liveDemo}
                    target="_"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </StyledCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button
          variant="contained"
          color="inherit"
          href="https://github.com/BiTheDev"
          target="_"
          style={{
            background: "linear-gradient(to bottom, #151515 0%, #263238 100%)",
          }}
        >
          See More Projects on GitHub
        </Button>
      </div>
    </Container>
  );
};

export default ProjectsPage;
