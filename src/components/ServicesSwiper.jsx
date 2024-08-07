"use client"; // <===== REQUIRED
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import styles
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { servicesData } from "./Services";

export default function ServicesCarousel() {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 4,
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 3,
          },
        },
      }}
      className="py-3 mx-auto"
    >
      {servicesData.map((service, index) => (
        <SplideSlide key={index}>
          <Card className="min-h-[250px]">
            <CardMedia
              component="img"
              height="150"
              image={service.icon}
              alt={service.title}
            />
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
              <Typography variant="h6" className="text-lg font-bold">
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </CardContent>
          </Card>
        </SplideSlide>
      ))}
    </Splide>
  );
}
