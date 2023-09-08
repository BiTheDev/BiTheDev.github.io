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
  background: '#263238',
  color: '#FFFFFF',
});

const StyledTimelineItem = styled(TimelineItem)({
  alignItems: 'center', // Make the TimelineItem left-aligned
});

const ProjectsPage = () => {
  const projectsData = [
    {
      id: 1,
      title: "Indoor 5G network monitor dashboard",
      description: "A demo monitor dashboard that...",
      technologies: ["React", "Material UI", "HTML", "CSS"],
      image: "/images/monitordash.png",
      githubUrl: "https://github.com/BiTheDev/MonitorDashboard",
      liveDemo: "https://demo-dashboard-649l.onrender.com/",
      year: "2023 August",
    },
    {
      id: 2,
      title: "MERN Social Media",
      description: "A social media project with MERN from web development course hosted on Render",
      technologies: ["HTML", "CSS","JavaScript", "React","Material UI", "express.js","node.js", "MongoDB"],
      image: "/images/socialmedia.png",
      githubUrl: "https://github.com/BiTheDev/MERN_Social_Media",
      liveDemo: "https://brian-ho-project3-social-app.onrender.com",
      year: "2023 May",
    },
    {
      id: 2,
      title: "Wordle game",
      description: "Mini wordle game with React from web development course hosted on Render",
      technologies: ["HTML", "CSS","JavaScript", "React", "Material UI", "express.js","node.js", "MongoDB", ],
      image: "/images/wordle.png",
      githubUrl: "https://github.com/BiTheDev/React_Wordle",
      liveDemo: "https://brian-ho-project3-social-app.onrender.com",
      year: "2023 April",
    },
    {
      id: 3,
      title: "Mini Tip Calculator app",
      description: "A task management application",
      technologies: ["HTML", "CSS","JavaScript"],
      image: "/images/tipcal.png",
      githubUrl: "https://github.com/BiTheDev/TipCalculator",
      liveDemo: "https://bithedev.github.io/TipCalculator/",
      year: "2022 December",
    },
    // ... More projects
  ];

  return (
      <Container style={{ padding: "30px" }} maxWidth="xl">
        <Typography variant="h4" style={{textAlign:"center"}} gutterBottom>
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
                  <CardActionArea
                  href={project.liveDemo}
                  target="_">
                    <CardMedia
                      component="img"
                      alt={project.title}
                      style={{minHeight:"320px"}}
                      image={project.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="white">
                        {project.description}
                      </Typography>
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
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Button
            variant="contained"
            color="inherit"
            href="https://github.com/yourusername"
            target="_blank"
          >
            See More Projects on GitHub
          </Button>
        </div>
      </Container>
  );
};

export default ProjectsPage;
