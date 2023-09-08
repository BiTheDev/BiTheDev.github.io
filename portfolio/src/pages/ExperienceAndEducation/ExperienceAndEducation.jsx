import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { styled } from "@mui/material";


const StyledCard = styled(Card)({
  background: "#263238",
  color: "#FFFFFF",
});

const ExperienceAndEducation = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      year: "June 2024",
      institution: "Northeastern University, Khoury College of Computer Sciences | Seattle, WA",
      description:[
        "Relevant courses completed: Algorithm, Programming Design Paradigm, Database Management, Scalable Distributed System, Foundation of Software development, Web development (React)",
        "Course in progress: Machine Learning"
      ]
    },
    {
      degree: "Bachelor of Geography - GIS, Mapping and Society, Minor Informatics",
      year: "August 2020",
      institution: "University of Washington | Seattle, WA",
      description:[
        "Relevant courses completed: GIS Mapping, GIS Database Programming, Tech Foundations with R, Coastal GIS, Database and Data Modeling, Design Methods, data programming"
      ]
    },
    {
      degree: "Web Development Certificate ",
      year: "September 2018",
      institution: "Coding Dojo Bootcamp | Bellevue, WA",
      description:[
        "Spent a total of 1000+ hours on countless assignments and projects",
        "Stack Learned: ",
        "C#/ASP.NET ( Black Belt - 100%)",
        "MongoDB/Express.js/Angular/Node.js (Black Belt - 100%)",
        "Python/Django ( Red Belt - 90%)"
      ]
    },
    {
      degree: "Associate of Arts and Science",
      year: "December 2017",
      institution: "Bellevue College | Bellevue, WA",
      description:[
        "Relevant courses completed: SQL Fundamentals, Networking Basics, Web Development, Systems Analysis & Design, C# programming, JAVA programming"
      ]
    }
  ];

  const experienceData = [
    {
      title: "Associate Software Engineer",
      year: "January 2021 - April 2023",
      company: "Infosys | Bellevue, WA (Remote)",
      description: [
        "Revamped tracking mechanisms, improving efficiency by 70% across 52 markets for Bing Wallpaper online content. ",
        "Analyzed and documented intricate user experience bug reports across multiple browsers and operating systems. ",
        "Developed user-centric features for Bing's new tab extension using HTML, CSS, jQuery, AJAX, and Chrome Extension API. ",
        "Fostered a collaborative remote working environment and consistently improved the quality of Bing Search Chrome Extension development. ",
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
                <ul>
                  {edu.description.map((desc, i) => (
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
