import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img.webp";
import video from "../assets/video.mp4";
import { Box, Card, useMediaQuery, useTheme } from "@mui/material";

const mediaItems = [
  { type: "image", src: img1 },
  { type: "video", src: video },
  { type: "image", src: img2 },
];

const ImageVideoCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const swiperRef = useRef(null); //swiper events

  //handle stop auto slide if video comes
  const handleSlideChange = (swiper) => {
    const currentItem = mediaItems[swiper.realIndex];

    if (currentItem?.type === "video") {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        p: 1,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Card>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={!isMobile}
          modules={[Keyboard, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {mediaItems.map((item, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  height: { xs: 240, sm: 320, md: 320 },
                  width: "100%",
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: 3,
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`media-${i}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    aria-label="Video playing"
                    muted
                    autoPlay
                    preload="metadata"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </Box>
  );
};

export default ImageVideoCarousel;
