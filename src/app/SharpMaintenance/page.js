import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { LocalPhone as LocalPhoneIcon, WhatsApp } from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import arValues from "../../../public/locales/ar/translation.json";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};

const SharpMaintenance = () => {
  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";
  return (
    <>
      <Head>
        <title>صيانة شارب - خدمات الصيانة الموثوقة لأجهزة شارب في مصر</title>
        <meta
          name="description"
          content="خدمات صيانة موثوقة لجميع أجهزة شارب في مصر. نقدم صيانة للثلاجات والتكييفات والغسالات بأيدي خبراء متخصصين. اتصل بنا على 01102941029."
        />
        <meta
          name="keywords"
          content="صيانة شارب, صيانة ثلاجات شارب, صيانة تكييف شارب, صيانة غسالات شارب, رقم صيانة شارب"
        />
      </Head>

      <Navbar
        logo="/assets/Imgs/Sharp/logoSharp.png"
        logoTitle="صيانة شارب"
        PhoneNmberTitle="رقم صيانة شارب"
        whatsAppTitle="هاتف صيانة شارب"
      />
      <section className="w-full py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-screen">
        <div className="container mx-auto px-2 md:px-4 w-full h-full relative">
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last relative lg:aspect-square bg-gray-400 h-full">
            <div className="relative w-full h-full">
              <Image
                src="/assets/Imgs/Sharp/sharpBg.jpg"
                alt="صيانة شارب"
                layout="fill"
                objectFit="cover"
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 absolute top-[50%] w-[100%] text-center">
            <div className="space-y-2">
              <Typography
                variant="h1"
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
              >
                {t("main_title")}
              </Typography>
              <Typography
                variant="p"
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
      <main className="bg-gray-50 py-16 md:py-24">
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            className="text-4xl font-bold text-center mb-8"
          >
            صيانة أعطال شارب فى مصر
          </Typography>

          <Box className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              أفضل خدمات صيانة شارب في مصر
            </Typography>
            <Typography variant="body1" className="text-right mb-4">
              نقدم خدمات صيانة متميزة لجميع أجهزة شارب، بما في ذلك الثلاجات
              والتكييفات والغسالات. فريقنا من الخبراء مستعد لحل جميع مشاكل
              أجهزتكم بكفاءة عالية.
            </Typography>
          </Box>

          <Box className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              خدماتنا
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="صيانة شارب ثلاجات"
                  secondary="إصلاح جميع أنواع الأعطال في ثلاجات شارب"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="صيانة شارب تكييف"
                  secondary="صيانة وإصلاح تكييفات شارب بجميع أنواعها"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="صيانة شارب غسالات"
                  secondary="حلول متكاملة لجميع مشاكل غسالات شارب"
                />
              </ListItem>
            </List>
          </Box>

          <Box className="bg-white shadow-lg rounded-lg p-8">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              تواصل معنا
            </Typography>
            <Typography variant="body1" className="mb-2">
              رقم الخط الساخن:{" "}
              <a
                href={`tel:+201102941029`}
                title={"رقم صيانة شارب"}
                className="text-blue-600 hover:underline"
              >
                19319
              </a>
            </Typography>
            <Typography variant="body1" className="mb-2">
              البريد الإلكتروني:{" "}
              <a
                href="mailto:ahmednasserr86@gmail.com"
                className="text-blue-600 hover:underline"
              >
                Contactus@elarabygroup.com
              </a>
            </Typography>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default SharpMaintenance;
