import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import img1 from "../assets/testimonial1.webp";
import img2 from "../assets/testimonial3.webp";
import img3 from "../assets/testimonial4.webp";
import img4 from "../assets/testimonial5.webp";
import img5 from "../assets/testimonial6.webp";

// Dummy Testimonials data
const testimonials = [
  {
    image: img1,
    name: "Mr John Doe",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: img2,
    name: "Dr Ram Singh",
    quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    info: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: img3,
    name: "Tommy",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente doloremque rerum.",
    info: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: img4,
    name: "Maria",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente doloremque rerum.",
    info: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: img5,
    name: "Victoria",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente doloremque rerum.",
    info: "Lorem ipsum dolor sit amet consectetur",
  },
];

const TestimonialCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        p: { xs: 1, sm: 2,  md: 0, },
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{my:2 ,color: "#4a4a4a" }}
      >
        See what others are saying about us
      </Typography>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={!isMobile}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "4 / 3",
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 1,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(3, 3, 3, 1), rgba(0,0,0,0.1))",
                  color: "#fff",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography variant="body2" fontStyle="italic" mb={1}>
                  “{item.quote}”
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ mb: 1, color: "#fff" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="caption">{item.info}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TestimonialCarousel;
