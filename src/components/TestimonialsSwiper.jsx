"use client"; // <===== REQUIRED
import React from "react";
import { testimonialsData } from "./Testimonials";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import styles
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

export default function TestimonialsSwiper() {
  const testimonials = testimonialsData;
  const t = (key) => key;

  return (
    <div>
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
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <Card className="min-h-[250px]">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <Typography variant="h6" className="text-lg font-bold">
                  {t(testimonial.name)}
                </Typography>
                <Avatar
                  src={testimonial.photo}
                  alt={t(testimonial.name)}
                  className="w-24 h-24 rounded-full"
                />
                <Typography variant="body2">
                  {t(testimonial.feedback)}
                </Typography>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
