import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Avatar,
  IconButton,
  LinearProgress,
  Divider,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
const DonationInfo = () => {
  return (
    <Box
      sx={{
        marginLeft: {
          xs: 0,
          sm: 0,
          md: 5,
        },
        p: {
          xs: 1,
          sm: 2,
          md: 0,
        },
      }}
    >
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
          },

          borderRadius: 3,
          p: 2,
          boxShadow: 3,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Amount and Progress */}
        <Box>
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            gap={1}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#484848" }}
            >
              $123,456
            </Typography>
            <Typography variant="body2" color="text.secondary">
              raised of $847,987
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={(123456 / 847987) * 100}
            aria-label="donate progress bar"
            sx={{
              mt: 1,
              height: 8,
              borderRadius: 5,
              backgroundColor: "#efefef",
            }}
          />
        </Box>

        {/* Donors and Days */}
        <Box display="flex" justifyContent="start" alignItems="center" gap={5}>
          <Typography fontWeight="semibold" sx={{ color: "#a3a3a3" }}>
            1000 donors
          </Typography>
          <Typography color="error" fontWeight="bold" sx={{ color: "#f1727d" }}>
            5 days to go
          </Typography>
        </Box>

        <Divider />

        {/* Organizer */}
        <Box display="flex" gap={2}>
          <Avatar alt="Organizer" aria-label="Organizer icon" />
          <Box>
            <Typography variant="subtitle2" fontWeight="bold">
              Organizer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Button
              size="small"
              variant="outlined"
              color="#7e8587"
              startIcon={<EmailIcon size="small" />}
              sx={{
                fontSize: "0.70rem",
                textTransform: "none",
                mb: 0.5,
                backgroundColor: "#e1f5fb",
                borderRadius: ".9rem",
              }}
            >
              Contact
            </Button>
            <IconButton
              size="small"
              aria-label="info icon"
              sx={{ backgroundColor: "#d7eaf0" }}
            >
              <InfoOutlinedIcon
                sx={{ backgroundColor: "#e1f5fb", borderRadius: "100%" }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* Location */}
        <Box display="flex" alignItems="center" gap={1}>
          <FmdGoodIcon fontSize="medium" color="inherit" />
          <Typography variant="body2" color="textSecondary">
            San Fransisco, California
          </Typography>
        </Box>

        {/* Donate Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#ffbe62",
            color: "#675337",
            fontWeight: "bold",
            py: 1.5,
            borderRadius: 10,
          }}
        >
          Donate now
        </Button>

        {/* Encryption Info */}
        <Box display="flex" alignItems="center" gap={2}>
          <LockOutlinedIcon fontSize="small" aria-label="lock icon" />
          <Typography variant="caption" color="text.secondary">
            We protect your payment information using 256 bit encryption
          </Typography>
        </Box>

        {/* social media icons */}
        <Box>
          <Box display="flex" gap={1} alignItems="center">
            <Typography variant="body2" color="textSecondary">
              Share:
            </Typography>
            <IconButton aria-label="Share on instagram">
              <InstagramIcon sx={{ color: "#E1306C" }} />
            </IconButton>
            <IconButton aria-label="Share on youtube">
              <YouTubeIcon sx={{ color: "#FF0000" }} />
            </IconButton>
            <IconButton aria-label="Share on LinkedIn">
              <LinkedInIcon sx={{ color: "#0A66C2" }} />
            </IconButton>
            <IconButton aria-label="Share on LinkedIn">
              <MailOutlineOutlinedIcon sx={{ color: "#E1306C" }} />
            </IconButton>
            <IconButton aria-label="link-icon">
              <LinkIcon />
            </IconButton>
          </Box>
        </Box>

        {/* bottom design */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
          pt={1}
          sx={{ borderTop: "1px solid #eee" }}
        >
          <Box
            sx={{
              alignItems: "center",
              color: "#fff",
              fontSize: 14,
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="#338abf">
              ⛨ Protected by equall all Guarantee
            </Typography>
          </Box>

          <IconButton aria-label="arrrow down icon">
            <KeyboardArrowDownTwoToneIcon color="primary" />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
};

export default DonationInfo;
