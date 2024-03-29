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

import Tooltip from "@mui/material/Tooltip";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FlightIcon from "@mui/icons-material/Flight";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import CabinIcon from '@mui/icons-material/Cabin';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HikingIcon from '@mui/icons-material/Hiking';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import TerminalIcon from '@mui/icons-material/Terminal';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SettingsIcon from '@mui/icons-material/Settings';

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
  background: "#263238",
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

const hobbiesData = [
  { name: "Traveling", icon: <FlightIcon fontSize="large" /> },
  { name: "Gaming", icon: <SportsEsportsIcon fontSize="large" /> },
  { name: "Taking Photo", icon: <CameraAltIcon fontSize="large" /> },
  { name: "Hiking", icon: <HikingIcon fontSize="large" /> },
  { name: "Camping", icon: <CabinIcon fontSize="large" /> },
  { name: "Reading", icon: <AutoStoriesIcon fontSize="large" /> },
  { name: "3D printing", icon: <SettingsIcon fontSize="large" /> },
  { name: "Enjoying Nature", icon: <LocalFloristIcon fontSize="large" /> },
  // ... add more hobbies
];

const interestsData = [
  { name: "Artifical Intelligence", icon: <PsychologyIcon fontSize="large" /> },
  { name: "Machine Learning", icon: <ModelTrainingIcon fontSize="large" /> },
  { name: "Virtual Reality", icon: <ThreeDRotationIcon fontSize="large" /> },
  { name: "Robotic", icon: <SmartToyIcon fontSize="large" /> },
  { name: "Programming", icon: <TerminalIcon fontSize="large" /> },
  { name: "Future Technology", icon: <DeveloperBoardIcon fontSize="large" /> },

  // ... add more interests
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <Container style={{ padding: "30px" }} maxWidth="xl" data-aos="zoom-in">
        <StyledBox>
          <svg
            width="336"
            height="77.92"
            viewBox="0 0 336 77.92"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="svgGroup"
              stroke-linecap="round"
              fill-rule="evenodd"
              font-size="9pt"
              stroke="#000"
              strokeWidth="0.25mm"
              fill="none"
              style={{ stroke: "white", strokeWidth: "0.25mm", fill: "white" }}
            >
              <path
                d="M 259.36 34.48 L 262.48 34.48 Q 267.6 21.68 274.16 8.56 Q 272.568 8.744 269.943 8.975 A 378.649 378.649 0 0 1 268.24 9.12 Q 264.805 9.407 262.522 9.629 A 200.509 200.509 0 0 0 262 9.68 Q 259.629 9.917 256.164 10.467 A 177.621 177.621 0 0 0 256.08 10.48 Q 252.56 11.04 250.24 11.8 A 34.912 34.912 0 0 0 248.11 12.58 Q 247.036 13.012 245.868 13.55 A 59.639 59.639 0 0 0 245.08 13.92 Q 242.24 15.28 240.32 17.04 Q 235.76 21.36 233.84 27.6 Q 233.04 30.16 233.04 33.04 Q 233.04 35.92 235.12 38.64 Q 237.149 41.294 240.472 41.359 A 8.576 8.576 0 0 0 240.64 41.36 A 8.976 8.976 0 0 0 248.233 37.527 Q 249.454 35.878 250.32 33.52 A 47.323 47.323 0 0 0 250.883 31.916 Q 251.68 29.493 251.68 28.36 A 6.757 6.757 0 0 0 251.634 27.545 Q 251.527 26.662 251.166 26.129 A 2.033 2.033 0 0 0 251.16 26.12 Q 250.691 25.435 251.296 25.237 A 1.266 1.266 0 0 1 251.44 25.2 Q 252 25.12 252.4 25.84 Q 253.36 27.92 253.36 30.32 A 8.387 8.387 0 0 1 253.008 32.658 Q 252.61 34.033 251.76 35.52 A 16.114 16.114 0 0 1 249.123 39.122 A 12.585 12.585 0 0 1 244.4 42.16 Q 242.16 42.96 239.92 42.96 A 11.051 11.051 0 0 1 236.14 42.277 A 12.996 12.996 0 0 1 235.44 42 Q 231.2 40.16 229.2 35.76 Q 227.92 33.12 227.92 30.72 A 18.27 18.27 0 0 1 228.065 28.49 Q 228.206 27.352 228.481 26.093 A 33.09 33.09 0 0 1 228.68 25.24 A 16.401 16.401 0 0 1 229.905 21.934 Q 230.63 20.46 231.68 18.96 Q 233.92 15.76 237.28 13.8 A 46.548 46.548 0 0 1 242.688 11.086 A 41.518 41.518 0 0 1 244 10.56 Q 247.025 9.408 251.056 8.774 A 51.668 51.668 0 0 1 251.96 8.64 Q 256.56 8 259.96 7.68 A 137.72 137.72 0 0 1 262.707 7.452 Q 263.933 7.361 265.297 7.278 A 268.155 268.155 0 0 1 268.16 7.12 Q 272.917 6.882 275.238 6.645 A 43.242 43.242 0 0 0 275.28 6.64 A 17.712 17.712 0 0 1 275.92 5.624 Q 276.697 4.471 277.881 3.017 A 56.629 56.629 0 0 1 277.96 2.92 Q 279.76 0.72 281.04 0.36 A 14.711 14.711 0 0 1 281.716 0.186 Q 282.373 0.035 282.838 0.007 A 3.355 3.355 0 0 1 283.04 0 A 5.069 5.069 0 0 1 284.148 0.11 Q 285.709 0.461 285.954 1.933 A 3.574 3.574 0 0 1 286 2.52 Q 286 4.632 283.696 6.154 A 10.238 10.238 0 0 1 282.72 6.72 A 17.249 17.249 0 0 1 280.121 7.808 Q 278.27 8.4 276.56 8.4 Q 274.4 12.56 270.44 23.24 Q 266.98 32.572 266.36 34.178 A 11.547 11.547 0 0 1 266.24 34.48 A 140.593 140.593 0 0 1 270.776 34.561 Q 275.499 34.714 281.72 35.16 A 931.399 931.399 0 0 0 285.018 35.391 Q 291.605 35.84 293.36 35.84 Q 294.585 32.288 297.146 26.391 A 340.979 340.979 0 0 1 298.84 22.56 Q 302.038 15.439 304.611 11.171 A 44.099 44.099 0 0 1 305.68 9.48 Q 308.084 5.874 310.251 4.59 A 5.627 5.627 0 0 1 311.24 4.12 Q 313.569 3.296 314.55 3.21 A 2.421 2.421 0 0 1 314.76 3.2 A 5.521 5.521 0 0 1 315.025 3.206 Q 315.635 3.236 315.677 3.413 A 0.117 0.117 0 0 1 315.68 3.44 Q 315.68 3.667 314.753 4.143 A 11.661 11.661 0 0 1 314.64 4.2 A 2.56 2.56 0 0 0 314.114 4.579 Q 313.299 5.303 311.956 7.154 A 56.473 56.473 0 0 0 311.08 8.4 A 50.314 50.314 0 0 0 309.558 10.78 Q 307.967 13.412 305.976 17.231 A 217.166 217.166 0 0 0 304.72 19.68 Q 300.88 27.28 298 35.76 Q 301.996 35.76 303.605 35.439 A 4.165 4.165 0 0 0 304.2 35.28 Q 305.52 34.8 305.8 35.12 A 0.227 0.227 0 0 1 305.859 35.274 Q 305.859 35.538 305.3 35.971 A 6.071 6.071 0 0 1 305.04 36.16 A 9.793 9.793 0 0 1 302.711 37.327 Q 300.497 38.114 297.33 38.317 A 31.563 31.563 0 0 1 297.28 38.32 Q 297.2 38.48 296 42.16 A 176.405 176.405 0 0 0 294.345 47.564 Q 292 55.723 292 59.52 Q 292 62.32 293 63.44 A 4.283 4.283 0 0 0 293.637 64.031 Q 294.055 64.341 294.492 64.47 A 2.218 2.218 0 0 0 295.12 64.56 Q 295.957 64.56 296.927 64.025 A 7.226 7.226 0 0 0 297.6 63.6 Q 301.252 60.909 305.469 53.239 A 97.438 97.438 0 0 0 307.6 49.12 Q 308.24 47.76 308.84 48 Q 309.44 48.24 308.8 49.68 Q 306.382 54.843 304.631 57.764 A 31.636 31.636 0 0 1 303.88 58.96 Q 301.92 61.92 299.44 64.4 Q 297.147 66.582 294.853 67.238 A 7.143 7.143 0 0 1 292.88 67.52 A 6.874 6.874 0 0 1 290.845 67.238 Q 288.761 66.594 287.76 64.48 A 8.015 8.015 0 0 1 287.321 63.434 Q 287.04 62.59 287.04 61.84 Q 287.04 60.64 287.08 59.32 Q 287.12 58 287.36 55.88 A 21.093 21.093 0 0 1 287.605 54.3 Q 287.761 53.487 287.989 52.562 A 49.785 49.785 0 0 1 288.52 50.6 Q 289.44 47.44 289.96 45.8 Q 290.358 44.545 291.061 42.609 A 183.087 183.087 0 0 1 291.52 41.36 Q 292.502 38.718 292.628 38.355 A 2.765 2.765 0 0 0 292.64 38.32 A 82.362 82.362 0 0 1 290.638 38.284 Q 285.836 38.154 272.118 37.567 A 6105.477 6105.477 0 0 1 265.52 37.28 Q 260.64 51.84 250.16 63.36 Q 245.04 69.04 238.24 72.88 Q 229.12 77.92 219.04 77.92 Q 214.8 77.92 209.6 76.68 A 26.045 26.045 0 0 1 201.224 72.993 A 30.53 30.53 0 0 1 199.76 71.96 Q 195.12 68.48 193.16 62.56 A 20.381 20.381 0 0 1 192.149 56.113 Q 192.149 53.972 192.551 51.696 A 30.652 30.652 0 0 1 193.04 49.44 Q 194 45.76 197.32 42.56 Q 200.64 39.36 202.8 39.28 Q 203.468 39.28 203.69 39.42 A 0.279 0.279 0 0 1 203.76 39.48 Q 203.91 39.667 203.674 39.925 A 1.125 1.125 0 0 1 203.64 39.96 A 1.954 1.954 0 0 1 203.082 40.347 A 2.298 2.298 0 0 1 202.96 40.4 A 7.971 7.971 0 0 0 201.234 41.453 Q 199.65 42.692 198 44.96 Q 194.64 49.6 194.64 55.76 Q 194.64 65.36 203.92 70.08 A 25.934 25.934 0 0 0 211.247 72.418 A 34.799 34.799 0 0 0 217.04 72.88 A 29.851 29.851 0 0 0 221.314 72.585 A 25.545 25.545 0 0 0 223.2 72.24 A 49.643 49.643 0 0 0 257.09 46.425 A 73.385 73.385 0 0 0 261.36 37.12 Q 259.28 37.12 257.32 38.04 Q 255.36 38.96 254.76 38.96 A 1.118 1.118 0 0 1 254.515 38.936 Q 254.167 38.857 254.09 38.529 A 0.753 0.753 0 0 1 254.08 38.48 Q 254.08 37.169 255.865 35.969 A 8.817 8.817 0 0 1 256 35.88 A 13.129 13.129 0 0 1 257.153 35.211 Q 258.37 34.59 259.36 34.48 Z M 58.64 11.6 L 63.2 6.4 Q 56.88 5.28 49.28 5.28 Q 41.739 5.28 32.702 7.249 A 106.918 106.918 0 0 0 32.56 7.28 A 41.097 41.097 0 0 0 23.689 10.173 A 29.292 29.292 0 0 0 13.36 18 A 23.014 23.014 0 0 0 11.208 21.003 Q 10.191 22.718 9.711 24.37 A 10.383 10.383 0 0 0 9.28 27.28 Q 9.28 32.253 13.398 34.268 A 10.875 10.875 0 0 0 14.96 34.88 A 17.778 17.778 0 0 0 16.393 35.222 Q 17.139 35.365 17.805 35.414 A 9.14 9.14 0 0 0 18.48 35.44 Q 20 35.44 22 34.88 A 7.984 7.984 0 0 0 24.152 33.897 Q 25.028 33.336 25.88 32.52 Q 27.319 31.142 28.149 29.834 A 8.984 8.984 0 0 0 28.6 29.04 Q 29.246 27.749 29.395 26.954 A 2.368 2.368 0 0 0 29.44 26.52 A 1.274 1.274 0 0 1 29.478 26.193 Q 29.615 25.68 30.24 25.68 Q 30.979 25.754 31.104 26.647 A 2.489 2.489 0 0 1 31.12 26.8 L 31.12 26.88 A 11.64 11.64 0 0 1 25.999 35.062 A 15.322 15.322 0 0 1 24.88 35.76 A 15.23 15.23 0 0 1 21.395 37.134 A 12.564 12.564 0 0 1 18.32 37.52 L 14.16 36.8 A 16.051 16.051 0 0 1 10.157 34.799 Q 5.855 31.755 5.687 26.215 A 14.991 14.991 0 0 1 5.68 25.76 Q 5.68 20.24 10.56 14.88 A 30.609 30.609 0 0 1 21.615 7.121 Q 25.901 5.295 31.134 4.323 A 58.863 58.863 0 0 1 33.6 3.92 Q 40.96 2.88 48.92 2.88 A 77.196 77.196 0 0 1 64.605 4.532 A 85.09 85.09 0 0 1 65.12 4.64 A 23.324 23.324 0 0 1 66.465 3.565 Q 67.837 2.556 68.962 2.111 A 6.61 6.61 0 0 1 69.04 2.08 Q 70.72 1.44 71 1.44 A 1.536 1.536 0 0 1 71.113 1.444 Q 71.284 1.457 71.35 1.512 A 0.138 0.138 0 0 1 71.36 1.52 A 0.648 0.648 0 0 1 71.471 1.529 Q 71.804 1.587 71.56 2.04 Q 71.28 2.56 69.8 3.52 Q 68.639 4.274 68.192 4.928 A 1.84 1.84 0 0 0 68 5.28 A 52.81 52.81 0 0 1 74.066 7.209 Q 77.008 8.36 79.304 9.766 A 20.391 20.391 0 0 1 83.68 13.28 A 12.04 12.04 0 0 1 85.164 15.32 Q 86.24 17.215 86.24 19.16 A 11.027 11.027 0 0 1 85.482 23.115 A 14.452 14.452 0 0 1 84.48 25.2 A 12.962 12.962 0 0 1 80.195 29.606 A 18.264 18.264 0 0 1 76.96 31.24 Q 71.76 33.28 66.48 33.52 Q 71.6 35.12 76 38 Q 82.24 42.08 82.24 48.88 A 12.47 12.47 0 0 1 80.075 55.868 A 16.401 16.401 0 0 1 78.96 57.36 A 24.837 24.837 0 0 1 69.806 64.206 A 31.32 31.32 0 0 1 66.56 65.44 A 38.832 38.832 0 0 1 59.138 67.063 A 33.343 33.343 0 0 1 55.36 67.28 Q 53.36 67.28 51.44 67.04 Q 38.88 65.44 30.16 61.52 Q 22.24 67.36 13.44 67.36 A 28.703 28.703 0 0 1 9.067 67.054 Q 3.681 66.22 1.42 63.114 A 7.812 7.812 0 0 1 0.56 61.6 A 7.144 7.144 0 0 1 0.125 60.032 Q 0.008 59.318 0 58.509 A 11.95 11.95 0 0 1 0 58.4 Q 0 56.56 1.84 54.48 A 9.433 9.433 0 0 1 7.278 51.506 A 13.871 13.871 0 0 1 9.84 51.28 A 20.345 20.345 0 0 1 13.229 51.551 A 16.149 16.149 0 0 1 15.92 52.24 A 31.042 31.042 0 0 1 17.941 53.042 Q 18.978 53.492 20.153 54.072 A 76.34 76.34 0 0 1 22.64 55.36 Q 26.64 57.52 28.56 58.48 Q 31.186 55.914 33.946 51.855 A 75.592 75.592 0 0 0 35.84 48.92 A 140.936 140.936 0 0 0 40.914 39.968 A 122.17 122.17 0 0 0 42.44 36.92 Q 44.881 31.867 48.473 25.839 A 210.957 210.957 0 0 1 49.68 23.84 Q 54.08 16.64 58.64 11.6 Z M 146.08 42.56 A 8.279 8.279 0 0 0 145.339 43.435 Q 144.149 45.02 142.386 48.344 A 99.1 99.1 0 0 0 142 49.08 Q 139.969 52.988 139.193 55.381 A 12.344 12.344 0 0 0 138.84 56.68 A 34.487 34.487 0 0 0 138.566 58.162 Q 138.32 59.688 138.32 60.76 A 2.974 2.974 0 0 0 138.37 61.33 Q 138.548 62.241 139.373 62.314 A 1.681 1.681 0 0 0 139.52 62.32 A 2.261 2.261 0 0 0 140.506 62.064 Q 141.706 61.479 143.248 59.56 A 21.478 21.478 0 0 0 143.28 59.52 Q 145.83 56.349 148.331 51.679 A 83.018 83.018 0 0 0 149.76 48.88 A 2.892 2.892 0 0 1 149.914 48.578 Q 150.097 48.271 150.302 48.15 A 0.567 0.567 0 0 1 150.48 48.08 Q 151.12 47.84 151.12 48.56 Q 151.12 48.85 150.994 49.224 A 3.987 3.987 0 0 1 150.88 49.52 A 94.604 94.604 0 0 1 148.202 54.577 Q 143.985 61.939 140.629 63.783 A 4.467 4.467 0 0 1 138.48 64.4 A 4.1 4.1 0 0 1 135.266 62.893 A 6.33 6.33 0 0 1 134.72 62.16 Q 134.153 61.215 134.032 59.774 A 9.777 9.777 0 0 1 134 58.96 Q 134 57.507 134.422 55.59 A 28.765 28.765 0 0 1 134.8 54.08 A 58.054 58.054 0 0 1 132.273 57.847 Q 128.046 63.6 124.68 64.303 A 4.494 4.494 0 0 1 123.76 64.4 Q 122.48 64.4 121.44 63.6 Q 119.368 62.15 
                    119.085 58.911 A 12.298 12.298 0 0 1 119.04 57.84 A 20.097 20.097 0 0 1 120.848 49.691 Q 122.095 46.859 124.203 43.996 A 40.666 40.666 0 0 1 125.84 41.92 Q 129.68 37.44 135.28 36.08 A 12.485 12.485 0 0 1 136.939 35.757 A 10.047 10.047 0 0 1 138.16 35.68 A 8.707 8.707 0 0 1 142.123 36.577 A 8.799 8.799 0 0 1 144.4 38.24 Q 145.2 39.12 144.88 39.92 Q 144.56 40.72 143.52 40.56 Q 142.64 37.68 139.68 37.68 Q 136.887 37.68 133.038 41.267 A 35.735 35.735 0 0 0 131.2 43.12 A 40.273 40.273 0 0 0 127.777 47.527 A 50.272 50.272 0 0 0 125.84 50.64 A 36.393 36.393 0 0 0 124.403 53.256 Q 123.114 55.869 122.812 57.825 A 7.454 7.454 0 0 0 122.72 58.96 A 7.285 7.285 0 0 0 122.79 60.021 Q 122.981 61.31 123.689 61.792 A 1.788 1.788 0 0 0 124.72 62.08 Q 129.52 62.08 137.28 47.36 Q 138.8 44.4 139.84 43.32 A 3.479 3.479 0 0 1 142.331 42.243 A 4.627 4.627 0 0 1 142.48 42.24 A 1.829 1.829 0 0 1 142.635 42.249 Q 143.048 42.285 144.12 42.48 A 11.105 11.105 0 0 0 144.636 42.562 Q 145.572 42.687 146.08 42.56 Z M 173.92 38 Q 164.08 55.28 164.08 60.56 A 4.193 4.193 0 0 0 164.14 61.307 Q 164.375 62.596 165.519 62.639 A 2.134 2.134 0 0 0 165.6 62.64 Q 169.68 62.64 176.56 48.8 A 4.33 4.33 0 0 1 176.708 48.487 Q 177.103 47.739 177.498 47.91 A 0.455 0.455 0 0 1 177.52 47.92 Q 178 48.16 178 48.56 A 1.274 1.274 0 0 1 177.957 48.876 Q 177.884 49.161 177.686 49.509 A 4.175 4.175 0 0 1 177.68 49.52 Q 173.44 58.08 170.52 61.32 A 13.887 13.887 0 0 1 168.878 62.887 Q 167.927 63.645 166.976 64.06 A 5.701 5.701 0 0 1 164.68 64.56 A 6.041 6.041 0 0 1 162.762 64.271 A 4.846 4.846 0 0 1 160.24 62.32 A 3.579 3.579 0 0 1 159.646 61.112 Q 159.504 60.619 159.46 60.032 A 7.328 7.328 0 0 1 159.44 59.48 Q 159.44 58.172 159.862 56.463 A 23.057 23.057 0 0 1 160.24 55.12 Q 161.013 52.648 164.397 47.191 A 131.73 131.73 0 0 1 164.64 46.8 Q 165.331 45.67 165.479 44.91 A 2.037 2.037 0 0 0 165.52 44.52 A 0.699 0.699 0 0 0 165.113 43.853 Q 164.811 43.698 164.282 43.682 A 4.108 4.108 0 0 0 164.16 43.68 A 1.97 1.97 0 0 0 163.416 43.865 Q 161.93 44.496 158.96 47.28 A 37.287 37.287 0 0 0 154.696 51.983 Q 151.19 56.52 147.84 63.12 A 3.386 3.386 0 0 1 147.536 63.552 Q 147.357 63.767 147.163 63.909 A 1.466 1.466 0 0 1 146.76 64.12 Q 146.205 64.305 144.656 64.388 A 33.413 33.413 0 0 1 144.4 64.4 A 16.752 16.752 0 0 0 143.687 64.447 Q 142.518 64.55 142.08 64.8 A 167.189 167.189 0 0 0 142.759 63.424 Q 143.849 61.191 145.826 57.041 A 2172.345 2172.345 0 0 0 147.12 54.32 Q 153.537 40.952 155.723 38.525 A 3.984 3.984 0 0 1 155.92 38.32 A 3.175 3.175 0 0 1 157.49 37.474 A 4.763 4.763 0 0 1 158.56 37.36 A 1.829 1.829 0 0 1 158.715 37.369 Q 159.128 37.405 160.2 37.6 A 11.105 11.105 0 0 0 160.716 37.682 Q 161.652 37.807 162.16 37.68 A 5.823 5.823 0 0 0 160.744 38.882 Q 157.832 42.062 152.656 52.37 A 229.972 229.972 0 0 0 152.48 52.72 Q 155.322 49.213 157.776 46.78 A 42.109 42.109 0 0 1 159.32 45.32 A 34.953 34.953 0 0 1 163.177 42.342 A 45.508 45.508 0 0 1 166.72 40.2 Q 170.963 37.882 172.968 37.841 A 3.496 3.496 0 0 1 173.04 37.84 A 2.507 2.507 0 0 1 173.605 37.902 A 2.146 2.146 0 0 1 173.92 38 Z M 34.96 57.2 L 31.92 60.08 A 67.255 67.255 0 0 0 49.422 64.661 A 75.789 75.789 0 0 0 51.36 64.88 Q 52.88 65.04 54.24 65.04 A 26.05 26.05 0 0 0 62.042 63.915 A 21.805 21.805 0 0 0 69.44 59.92 Q 73.918 56.338 75.447 52.375 A 11.615 11.615 0 0 0 76.24 48.16 Q 76.24 41.6 69.28 38.24 Q 67.32 37.322 64.68 36.426 A 71.611 71.611 0 0 0 63 35.88 Q 59.672 34.843 57.497 34.093 A 93.673 93.673 0 0 1 57 33.92 A 15.906 15.906 0 0 1 56.155 33.599 Q 54.909 33.08 54.522 32.596 A 0.904 0.904 0 0 1 54.4 32.4 A 1.331 1.331 0 0 1 55.134 31.146 Q 55.678 30.85 56.626 30.804 A 6.884 6.884 0 0 1 56.72 30.8 Q 58.226 30.8 61.304 31.036 A 165.087 165.087 0 0 1 61.36 31.04 A 80.256 80.256 0 0 0 63.275 31.166 Q 64.795 31.246 66.062 31.246 A 36.87 36.87 0 0 0 66.72 31.24 A 8.529 8.529 0 0 0 68.489 31.006 Q 69.356 30.805 70.326 30.432 A 21.425 21.425 0 0 0 72.12 29.64 Q 75.28 28.08 77.52 25.6 Q 79.773 23.097 80.616 20.781 A 7.868 7.868 0 0 0 81.12 18.08 A 7.713 7.713 0 0 0 78.179 12.092 Q 75.379 9.664 69.915 8.038 A 49.351 49.351 0 0 0 67.04 7.28 A 85.241 85.241 0 0 0 64.863 10.457 Q 61.448 15.652 55.628 25.497 A 1077.555 1077.555 0 0 0 51.84 31.96 A 395.441 395.441 0 0 1 46.751 40.48 Q 39.423 52.375 34.96 57.2 Z M 91.68 40.88 L 90.72 43.44 Q 86.843 53.595 83.202 58.589 A 19.402 19.402 0 0 1 81.04 61.12 Q 80.246 61.835 80.24 60.658 A 3.529 3.529 0 0 1 80.24 60.64 A 0.891 0.891 0 0 1 80.264 60.441 Q 80.286 60.348 80.326 60.245 A 2.028 2.028 0 0 1 80.4 60.08 A 55.535 55.535 0 0 0 85.297 52.289 A 71.029 71.029 0 0 0 88.16 46.08 A 85.197 85.197 0 0 0 91.149 37.482 A 66.429 66.429 0 0 0 92.72 30.72 A 5.531 5.531 0 0 1 92.991 29.754 Q 93.181 29.269 93.452 28.94 A 1.856 1.856 0 0 1 94.96 28.24 Q 96.72 28.24 97.52 30.48 Q 97.745 31.155 97.759 32.041 A 7.501 7.501 0 0 1 97.76 32.16 Q 97.76 35.76 93.2 38.96 Q 94.425 39.022 96.283 39.036 A 155.216 155.216 0 0 0 97.48 39.04 Q 100.16 39.04 104.24 38.64 Q 104.372 38.838 104.395 39.581 A 10.964 10.964 0 0 1 104.4 39.92 A 3.351 3.351 0 0 1 104.325 40.582 Q 104.131 41.532 103.44 43 Q 102.48 45.04 101.72 46.52 Q 100.96 48 100.28 49.32 Q 99.6 50.64 98.76 52.56 Q 97.92 54.48 97.36 56.08 A 27.144 27.144 0 0 0 96.988 57.302 Q 95.64 62.16 98 62.16 A 2.997 2.997 0 0 0 99.751 61.426 Q 102.898 59.029 107.92 48.8 A 5.063 5.063 0 0 1 108.086 48.513 Q 108.534 47.798 108.839 48 A 0.361 0.361 0 0 1 108.84 48 A 0.983 0.983 0 0 1 109.03 48.162 A 0.639 0.639 0 0 1 109.2 48.6 A 0.793 0.793 0 0 1 109.163 48.797 Q 109.005 49.358 108.16 51.08 Q 107.12 53.2 105.92 55.44 A 19.558 19.558 0 0 1 104.882 57.143 Q 104.341 57.944 103.66 58.818 A 45.815 45.815 0 0 1 102.16 60.64 A 16.487 16.487 0 0 1 100.608 62.293 Q 98.398 64.32 96.32 64.32 A 3.901 3.901 0 0 1 92.969 62.588 Q 92.5 61.928 92.158 61.017 A 9.759 9.759 0 0 1 92 60.56 A 3.569 3.569 0 0 1 91.879 60.069 Q 91.786 59.559 91.766 58.834 A 15.328 15.328 0 0 1 91.76 58.4 Q 91.76 57.1 92.511 55.015 A 23.903 23.903 0 0 1 92.68 54.56 A 26.976 26.976 0 0 1 93.44 52.787 Q 93.864 51.883 94.404 50.866 A 64.091 64.091 0 0 1 95.6 48.72 Q 97.381 45.656 97.766 44.845 A 2.983 2.983 0 0 0 97.84 44.68 A 3.47 3.47 0 0 0 98.027 44.054 A 2.793 2.793 0 0 0 98.08 43.52 Q 98.08 41.185 92.407 40.907 A 30.274 30.274 0 0 0 91.68 40.88 Z M 335.84 49.2 L 335.36 50.32 Q 334.88 51.44 334.64 51.92 A 54.289 54.289 0 0 0 334.5 52.203 Q 334.31 52.588 334.001 53.226 A 461.171 461.171 0 0 0 333.8 53.64 A 38.07 38.07 0 0 1 333.441 54.365 Q 333.088 55.056 332.801 55.533 A 11.036 11.036 0 0 1 332.76 55.6 Q 332.32 56.32 331.56 57.52 A 27.585 27.585 0 0 1 331.056 58.289 Q 330.594 58.968 330.2 59.44 Q 329.717 60.02 329.053 60.703 A 33.894 33.894 0 0 1 328.72 61.04 A 11.56 11.56 0 0 1 328.018 61.689 Q 327.515 62.115 327.04 62.4 A 9.88 9.88 0 0 1 325.574 63.132 Q 324.38 63.6 323.28 63.6 Q 320 63.6 318.16 61.52 A 18.259 18.259 0 0 1 315.915 62.955 Q 314.672 63.618 313.5 63.939 A 8.085 8.085 0 0 1 311.36 64.24 A 6.529 6.529 0 0 1 308.771 63.766 Q 305.953 62.557 305.578 58.271 A 15.958 15.958 0 0 1 305.52 56.88 A 14.774 14.774 0 0 1 306.013 53.189 Q 306.452 51.488 307.28 49.68 Q 309.68 44.08 314.04 40.16 Q 316.819 37.662 319.419 36.756 A 8.783 8.783 0 0 1 322.32 36.24 A 6.529 6.529 0 0 1 324.909 36.715 Q 327.727 37.923 328.102 42.209 A 15.958 15.958 0 0 1 328.16 43.6 A 14.774 14.774 0 0 1 327.667 47.292 Q 327.228 48.993 326.4 50.8 A 27.847 27.847 0 0 1 321.041 58.875 A 32.815 32.815 0 0 1 319.68 60.24 A 3.532 3.532 0 0 0 322.248 62.129 A 5.98 5.98 0 0 0 323.44 62.24 A 4.533 4.533 0 0 0 325.841 61.528 Q 326.487 61.132 327.109 60.516 A 9.551 9.551 0 0 0 327.52 60.08 Q 329.893 57.628 330.937 55.762 A 10.363 10.363 0 0 0 330.96 55.72 Q 332 53.84 332.48 52.96 Q 332.96 52.08 333.72 50.44 A 837.066 837.066 0 0 0 333.984 49.87 Q 334.51 48.733 334.64 48.44 Q 334.78 48.126 335.102 48.086 A 0.796 0.796 0 0 1 335.2 48.08 A 1.833 1.833 0 0 1 335.297 48.073 Q 335.909 48.045 335.988 48.496 A 0.838 0.838 0 0 1 336 48.64 A 0.891 0.891 0 0 1 335.976 48.84 Q 335.954 48.933 335.914 49.035 A 2.028 2.028 0 0 1 335.84 49.2 Z M 105.84 53.84 L 110.96 40.8 Q 111.12 40.32 111.12 39.52 Q 111.12 38.844 110.435 37.826 A 9.25 9.25 0 0 0 110.16 37.44 L 114.56 37.36 A 7.663 7.663 0 0 1 115.245 37.388 Q 116.465 37.498 116.72 38.04 Q 117.04 38.72 116.24 40.16 L 109.84 55.12 A 19.986 19.986 0 0 0 109.123 56.884 Q 108.806 57.793 108.646 58.601 A 8.019 8.019 0 0 0 108.48 60.16 A 3.104 3.104 0 0 0 108.612 61.106 Q 108.935 62.115 110.05 62.383 A 3.906 3.906 0 0 0 110.96 62.48 A 3.525 3.525 0 0 0 112.345 62.179 Q 113.228 61.803 114.16 60.96 Q 117.12 58 121.68 48.88 A 3.886 3.886 0 0 1 121.83 48.589 Q 122.315 47.745 122.8 48.16 Q 122.916 48.277 122.948 48.499 A 1.287 1.287 0 0 1 122.96 48.68 A 0.916 0.916 0 0 1 122.932 48.878 Q 122.851 49.223 122.544 49.936 A 24.906 24.906 0 0 1 122.32 50.44 A 560.465 560.465 0 0 1 121.719 51.751 Q 121.433 52.372 121.177 52.925 A 296.527 296.527 0 0 1 121.16 52.96 Q 120.681 53.992 119.388 56.21 A 134.109 134.109 0 0 1 119.16 56.6 Q 117.68 59.12 116.48 60.48 A 17.751 17.751 0 0 1 114.813 62.169 Q 112.447 64.24 110.28 64.24 A 7.602 7.602 0 0 1 108.71 64.089 Q 107.78 63.893 107.088 63.441 A 3.827 3.827 0 0 1 106.08 62.48 Q 104.8 60.72 104.8 58.56 Q 104.8 56.4 105.84 53.84 Z M 323.2 38.72 A 4.187 4.187 0 0 0 321.639 39.053 Q 320.362 39.567 318.863 40.876 A 19.918 19.918 0 0 0 318.08 41.6 Q 315.519 44.092 313.437 48.141 A 38.669 38.669 0 0 0 312.8 49.44 A 41.338 41.338 0 0 0 311.446 52.516 Q 310.184 55.763 310.023 58.191 A 10.46 10.46 0 0 0 310 58.88 Q 310 62.351 312.49 62.548 A 3.917 3.917 0 0 0 312.8 62.56 A 4.536 4.536 0 0 0 314.427 62.234 Q 315.68 61.753 317.091 60.562 A 15.962 15.962 0 0 0 317.28 60.4 A 7.157 7.157 0 0 1 316.228 58.193 A 6.475 6.475 0 0 1 316 56.48 Q 316.152 53.217 318.536 53.049 A 3.774 3.774 0 0 1 318.8 53.04 A 2.46 2.46 0 0 1 319.696 53.199 A 2.237 2.237 0 0 1 320.52 53.76 Q 321.164 54.442 321.198 55.016 A 1.078 1.078 0 0 1 321.2 55.08 Q 321.2 55.68 321.04 56.32 A 25.66 25.66 0 0 0 321.929 54.906 Q 322.95 53.17 324.16 50.64 Q 326.16 46.56 326.16 42.64 Q 326.16 38.928 323.505 38.731 A 4.134 4.134 0 0 0 323.2 38.72 Z M 26.8 60 A 624.443 624.443 0 0 0 23.532 58.447 Q 16.975 55.355 14.96 54.64 A 15.032 15.032 0 0 0 11.186 53.809 A 13.651 13.651 0 0 0 10.04 53.76 A 5.582 5.582 0 0 0 8.254 54.033 A 4.603 4.603 0 0 0 6.16 55.48 A 8.957 8.957 0 0 0 5.464 56.422 Q 4.733 57.573 4.72 58.565 A 2.733 2.733 0 0 0 4.72 58.6 Q 4.72 60 5.36 61.28 Q 7.12 64.88 12.72 64.88 A 22.737 22.737 0 0 0 26.088 60.519 A 28.208 28.208 0 0 0 26.8 60 Z M 117.639 33.833 A 4.082 4.082 0 0 0 118.8 33.12 A 4.856 4.856 0 0 0 118.92 33.014 A 3.847 3.847 0 0 0 120.16 30.8 A 3.723 3.723 0 0 0 120.181 30.669 Q 120.359 29.394 119.56 28.48 A 2.712 2.712 0 0 0 118.433 27.698 A 3.123 3.123 0 0 0 117.36 27.52 A 3.569 3.569 0 0 0 116.041 27.768 A 4.082 4.082 0 0 0 114.88 28.48 A 4.856 4.856 0 0 0 114.76 28.587 A 3.847 3.847 0 0 0 113.52 30.8 Q 113.36 32.16 114.16 33.12 A 2.556 2.556 0 0 0 115.325 33.928 A 3.104 3.104 0 0 0 116.32 34.08 A 3.569 3.569 0 0 0 117.639 33.833 Z M 282 2.48 A 1.051 1.051 0 0 0 281.491 2.661 Q 280.387 3.322 278 6.4 A 21.223 21.223 0 0 0 279.708 6.072 Q 283.121 5.254 283.121 3.661 A 1.51 1.51 0 0 0 283.12 3.6 Q 283.04 2.72 282.24 2.56 Q 282.174 2.494 282.053 2.483 A 0.563 0.563 0 0 0 282 2.48 Z"
                vector-effect="non-scaling-stroke"
              />
            </g>
          </svg>
          {/* Top Layer */}
          {/* <Typography variant="body2" gutterBottom>
            I am a Computer Science Graduate Student, Seeking Software engineer
            and web developer position
          </Typography> */}
          <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
          <StyledCard>
            <Typography variant="body1" paragraph style={{marginTop:"10px"}}>
              Highly adaptable and deliberative Computer Science graduate with
              experience in software engineering, seeking a Software Engineer
              position. Adept at generating innovative ideas (Ideation) and
              maximizing the efficacy of solutions. Ready to bring
              individualized approaches to a dynamic team, available for
              immediate start
            </Typography>
          </StyledCard>
          {/* Second Layer */}
          <Typography variant="h6" gutterBottom>
            Objectives
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <StyledCard style={{ height: "280px" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Who am I?
                  </Typography>
                  <Typography variant="body2">
                    <List>
                      <ListItem disableGutters>
                        A Master CS student at Northeastern University seeking
                        an opportunity to advance my career
                      </ListItem>
                      <ListItem disableGutters>
                        Always have great passion to learn new technologies and
                        sharpen my skills in various structure{" "}
                      </ListItem>
                      <ListItem disableGutters>
                        Continuously expanding skill-set and improving in
                        creating, debugging, data analyzing, cloud, and
                        programming knowledge{" "}
                      </ListItem>
                      <ListItem disableGutters>
                        Ability to work individually, Teamwork and always aim
                        for high quality work
                      </ListItem>
                    </List>
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={2}>
              <StyledCard style={{ height: "280px" }}>
                <CardContent>
                  <Typography variant="h6">My Strength</Typography>
                  <Typography variant="body2" align="center">
                    <List>
                      <ListItem disableGutters>Adaptability</ListItem>
                      <ListItem disableGutters>Individualization</ListItem>
                      <ListItem disableGutters>Deliberative</ListItem>
                      <ListItem disableGutters>Ideation</ListItem>
                      <ListItem disableGutters>Maximizer</ListItem>
                    </List>
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={5}>
              <StyledCard style={{ height: "280px" }}>
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
                    spacing={{ xs: 1, sm: 2 }}
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
                        class="devicon-threejs-original-wordmark"
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
                    spacing={{ xs: 1, sm: 8 }}
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
                        style={{ fontSize: "72px" }}
                        class="devicon-gradle-plain-wordmark"
                      ></i>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <i
                        style={{ fontSize: "68px" }}
                        class="devicon-inkscape-plain-wordmark"
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
                        class="devicon-processing-plain-wordmark"
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
            Hobbies & Interests
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Hobbies</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 6 }}
                    direction="row"
                    flexWrap="wrap"
                    style={{ minHeight: "150px" }}
                  >
                    {hobbiesData.map((hobby, index) => (
                      <Tooltip title={hobby.name} key={index}>
                        <Box display="flex" alignItems="center" mt={1}>
                          {hobby.icon}
                        </Box>
                      </Tooltip>
                    ))}
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h7">Interests</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 6 }}
                    direction="row"
                    flexWrap="wrap"
                    style={{ minHeight: "150px" }}
                  >
                    {interestsData.map((interest, index) => (
                      <Tooltip title={interest.name} key={index}>
                        <Box display="flex" alignItems="center" mt={1}>
                          {interest.icon}
                        </Box>
                      </Tooltip>
                    ))}
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </StyledBox>
      </Container>
    </StyledDiv>
  );
};

export default HomePage;
