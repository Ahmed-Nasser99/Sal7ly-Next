"use client"; // <===== REQUIRED
import React from "react";
import { brandData } from "./Brands";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import styles
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function BrandsSwiper() {
  const brands = brandData;
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
            320: {
              perPage: 1,
            },
            480: {
              perPage: 1,
            },
            640: {
              perPage: 2,
            },
            1024: {
              perPage: 4,
            },
          },
        }}
        className="py-3 mx-auto"
      >
        {brands.map((brand, index) => (
          <SplideSlide key={index}>
            <Card className="min-h-[250px]">
              <CardMedia
                component="img"
                height="150"
                image={brand.logo}
                alt={t(brand.name)}
              />
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <Typography variant="h6" className="text-lg font-bold">
                  {t(brand.name)}
                </Typography>
                <Typography variant="body2">{t(brand.description)}</Typography>
              </CardContent>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
