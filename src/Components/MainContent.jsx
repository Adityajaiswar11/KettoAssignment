import React, { Suspense, lazy } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//all component calling here main components
const ImageVideoCarousel = lazy(() => import("./ImageVideoCarousel"));
const DonationInfo = lazy(() => import("./DonationInfo"));
const CustomTab = lazy(() => import("./CustomTab"));
const TestimonialCard = lazy(() => import("./TestimonialCard"));
const FAQ = lazy(() => import("./FAQ"));

import btnImg from "../assets/btnImage.png";

const MainContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container
        sx={{
          mt: {
            xs: 2,
            sm: 0,
            md: 0,
          },
          p: 1,
          position: "relative",
        }}
      >
        {/* this for web heading */}
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "2rem",
            color: "#484848",
            mt: 2,
            mb: 2,

            width: "100%",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          My niece Poppy has lost her parents and need your help!
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
            <Box>
              <Suspense fallback={<div>Loading Carousel...</div>}>
                <ImageVideoCarousel />
              </Suspense>
            </Box>
            {!isMobile && (
              <Box sx={{ mt: 2 }}>
                <Suspense fallback={<div>Loading Tabs...</div>}>
                  <CustomTab />
                </Suspense>
              </Box>
            )}
          </Grid>

          {/* this is for mobile heading */}
          {isMobile && (
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.25rem",
                color: "#484848",
                fontFamily: "Roboto",
                m: {
                  xs: "0.6rem",
                  sm: 0,
                },
                width: "100%",
              }}
            >
              My niece Poppy has lost parents and need your help!
            </Typography>
          )}

          <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
            <Box>
              <Suspense fallback={<div>Loading Donation Info...</div>}>
                <DonationInfo />
              </Suspense>
            </Box>
          </Grid>
          {isMobile && (
            <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
              <Box>
                <CustomTab />
              </Box>
            </Grid>
          )}

          <Grid size={{ xs: 12 }}>
            <Suspense fallback={<div>Loading Testimonials...</div>}>
              <Box>
                <TestimonialCard />
              </Box>
            </Suspense>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box mb={10}>
              <Suspense fallback={<div>Loading FAQ...</div>}>
                <FAQ />
              </Suspense>
            </Box>
          </Grid>
        </Grid>
        {isMobile && (
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
              zIndex: 100,
              bgcolor: "#fff",
              boxShadow: "0 -2px 8px rgba(87, 60, 60, 0.1)",
            }}
          >
            <img
              src={btnImg}
              alt="Donate Now button"
              loading="lazy"
              style={{
                width: "100%",
                maxHeight: "65px",
                objectFit: "contain",
              }}
            />
          </Box>
        )}
      </Container>
    </>
  );
};

export default MainContent;
