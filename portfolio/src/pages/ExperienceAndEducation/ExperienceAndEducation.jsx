import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { styled } from "@mui/material";


const StyledCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.1)",
  color: "#FFFFFF",
});

const ExperienceAndEducation = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      year: "June 2024",
      institution: "Northeastern University, Khoury College of Computer Sciences | Seattle, WA",
    },
    {
      degree: "Bachelor of Geography - GIS, Mapping and Society, Minor Informatics",
      year: "August 2020",
      institution: "University of Washington | Seattle, WA",
    },
  ];

  const experienceData = [
    {
      title: "Associate Software Engineer",
      year: "January 2021 – April 2023",
      company: "Infosys | Bellevue, WA (Remote)",
      description: [
        "Revamped tracking mechanisms, improving efficiency by 70% across 52 markets for Bing Wallpaper online content.",
        // Add more descriptions
      ],
    },
    // Add more experiences
  ];

  return (
    <Grid container spacing={4} style={{minHeight:"100vh"}}>
      <Grid item xs={12} md={6}>
        <StyledCard>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Education
            </Typography>
            <Divider />
            {educationData.map((edu, index) => (
              <div key={index}>
                <Typography variant="h6" gutterBottom>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {edu.year}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {edu.institution}
                </Typography>
                <Divider style={{ marginBottom: '16px', marginTop: '16px' }} />
              </div>
            ))}
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <StyledCard>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Experience
            </Typography>
            <Divider />
            {experienceData.map((exp, index) => (
              <div key={index}>
                <Typography variant="h6" gutterBottom>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {exp.year}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {exp.company}
                </Typography>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>
                      <Typography variant="body2">
                        {desc}
                      </Typography>
                    </li>
                  ))}
                </ul>
                <Divider style={{ marginBottom: '16px', marginTop: '16px' }} />
              </div>
            ))}
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default ExperienceAndEducation;
