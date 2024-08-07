import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import {
  LocalPhone as LocalPhoneIcon,
  Email,
  WhatsApp,
  Phone,
  LocationCity,
  Star,
} from "@mui/icons-material";
import { brandData } from "../components/Brands";
import { servicesData } from "../components/Services";
import { testimonialsData } from "../components/Testimonials";
import BrandsSwiper from "@/components/BrandsSwiper";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import ServicesSwiper from "@/components/ServicesSwiper";

export default function MainComponent() {
  const t = (key) => key;

  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";
  const email = "ahmednasserr86@gmail.com";
  const location = "٢ شارع اليمني - أرض اللواء - حي العجوزة - محافظة الجيزة";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 py-4 lg:px-6 h-14 flex items-center justify-between w-[95%] mx-auto fixed top-0 left-0 right-0 z-50 rounded-b-lg bg-background shadow-md overflow-hidden">
        <Link href="#" className="flex items-center gap-2">
          <div className="w-[150px] h-[90px] pt-2">
            <Image
              src="/public/assets/Imgs/Logo.png"
              alt="صلحلي Sal7ly"
              className="w-full h-full"
              width={150}
              height={90}
            />
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-1">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="hidden sm:inline">{displayPhoneNumber}</span>
            </a>
            <Link
              href={`https://wa.me/${phoneNumber}`}
              className="flex items-center gap-3"
            >
              <WhatsApp className="w-5 h-5 text-green-500" />
              <span className="hidden sm:inline">{t("whatsapp")}</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="w-full py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-screen">
        <div className="container mx-auto px-2 md:px-4 grid gap-3 lg:grid-cols-2 xl:grid-cols-2 w-full h-full">
          <Image
            src="/public/assets/Imgs/appliancesGroupHomeBackground.png"
            alt="صيانة جميع الاجهزة الكهربائة"
            width={300}
            height={500}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square bg-gray-400 h-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Typography
                variant="p"
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
              >
                {t("main_title")}
              </Typography>
              <Typography
                variant="body1"
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                {t("main_description")}
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button
                variant="contained"
                color="success"
                startIcon={<LocalPhoneIcon className="mx-2" />}
                component="a"
                href={`tel:${phoneNumber}`}
              >
                {t("call_us")}
              </Button>
              <Button
                variant="outlined"
                startIcon={<WhatsApp className="text-green-500 mx-2" />}
                component="a"
                href={`https://wa.me/${phoneNumber}`}
              >
                {t("whatsapp")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                {t("our_services")}
              </Typography>
              <Typography
                variant="body1"
                className="text-muted-foreground md:text-xl lg:text-base xl:text-xl"
              >
                {t("services_description")}
              </Typography>
            </div>
          </div>
          <ServicesSwiper />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                {t("testimonials")}
              </Typography>
              <Typography
                variant="body1"
                className="text-muted-foreground md:text-xl lg:text-base xl:text-xl"
              >
                {t("testimonials_description")}
              </Typography>
            </div>
          </div>
          <TestimonialsSwiper />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                {t("our_brands")}
              </Typography>
              <Typography
                variant="body1"
                className="text-muted-foreground md:text-xl lg:text-base xl:text-xl"
              >
                {t("brands_description")}
              </Typography>
            </div>
          </div>
          <BrandsSwiper />
        </div>
      </section>

      <footer className="w-full py-6 bg-background">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-2">
          <Typography
            variant="body2"
            className="text-center text-muted-foreground"
          >
            &copy; {new Date().getFullYear()} صلحلي Sal7ly.{" "}
            {t("all_rights_reserved")}.
          </Typography>
          <Typography
            variant="body2"
            className="text-center text-muted-foreground"
          >
            {t("footer_text")}
          </Typography>
        </div>
      </footer>
    </div>
  );
}
