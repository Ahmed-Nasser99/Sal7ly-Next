import Navbar from "@/components/Navbar";
import React from "react";
import sharpBg from "../../../public/assets/Imgs/Sharp/sharpBg.jpg";
import sharpLogo from "../../../public/assets/Imgs/Sharp/logoSharp.png";










const SharpMaintenance = () => {
  return (
    <>
      <Navbar
        logo={sharpLogo}
        logoTitle={"صيانة شارب"}
        PhoneNmberTitle={"رقم صيانة شارب"}
        whatsAppTitle={"هاتف صيانة شارب"}
      />
      <main
        id="maincontent"
        className="page-main-full-width py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8"
      >
        <a id="contentarea" tabIndex="-1"></a>

        {/* Main Page Title */}
        <div className="page-title-wrapper">
          <h1 className="page-title">
            <span className="base" data-ui-id="page-title-wrapper">
              صيانة أعطال شارب فى مصر
            </span>
          </h1>
        </div>

        {/* Introduction */}
        <section>
          <h2>أفضل خدمات صيانة شارب في مصر</h2>
          <p style={{ textAlign: "right" }}>
            هل تواجه مشاكل في أجهزة شارب المنزلية مثل الشاشات، الثلاجات، أو
            التكييفات؟ العربى جروب يقدم لكم أفضل خدمات الصيانة والدعم الفني في
            مصر لضمان عمل أجهزتكم بكفاءة عالية.
          </p>
        </section>

        {/* Service Details */}
        <section>
          <h2>كيف نقدم خدمات صيانة شارب؟</h2>
          <p style={{ textAlign: "right" }}>
            نقدم خدمات صيانة لجميع منتجات شارب بما في ذلك أجهزة التبريد،
            التدفئة، الأجهزة الإلكترونية، وغيرها. تواصلوا معنا لحجز موعد الصيانة
            أو لمعرفة المزيد عن خدماتنا.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2>تواصل مع خدمة عملاء شارب</h2>
          <p style={{ textAlign: "right" }}>
            - <strong>رقم التليفون أو الخط الساخن لصيانة أجهزة شارب:</strong>{" "}
            19319
          </p>
          <p style={{ textAlign: "right" }}>
            - <strong>البريد الإلكتروني:</strong>{" "}
            <a tabIndex="0" href="mailto:Contactus@elarabygroup.com">
              Contactus@elarabygroup.com
            </a>
          </p>
          <p style={{ textAlign: "right" }}>
            -{" "}
            <a
              href="https://www.elarabygroup.com/ar/contact"
              target="_blank"
              rel="noopener"
            >
              هنا
            </a>{" "}
            لترك رسالتك.
          </p>
          <p style={{ textAlign: "right" }}>
            -{" "}
            <a
              href="https://www.elarabygroup.com/ar/service-centers"
              target="_blank"
              rel="noopener"
            >
              مراكز خدمة صيانة العربى
            </a>
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2>الأسئلة الشائعة حول صيانة شارب</h2>
          <h3>كيف أحجز موعد للصيانة؟</h3>
          <p style={{ textAlign: "right" }}>
            يمكنكم حجز موعد الصيانة عن طريق الاتصال بنا على الرقم 19319 أو من
            خلال البريد الإلكتروني المذكور أعلاه.
          </p>
          <h3>هل تقدمون قطع غيار أصلية لأجهزة شارب؟</h3>
          <p style={{ textAlign: "right" }}>
            نعم، نحن نقدم قطع غيار أصلية لجميع منتجات شارب لضمان أداء طويل الأمد
            للأجهزة.
          </p>
        </section>

        {/* Footer with Additional Information */}
        <section>
          <h2>معلومات إضافية حول صيانة شارب</h2>
          <p style={{ textAlign: "right" }}>
            تعرف على{" "}
            <a
              href="https://www.elarabygroup.com/ar/service-centers"
              target="_blank"
              rel="noopener"
            >
              مراكز خدمة صيانة العربى
            </a>{" "}
            في جميع أنحاء مصر.
          </p>
          <p style={{ textAlign: "right" }}>
            احصل على الدعم الفني والمشورة عبر موقعنا الرسمي أو تواصل مع خدمة
            العملاء لتسجيل الشكاوى أو الاستفسارات.
          </p>
        </section>
      </main>
    </>
  );
};

export default SharpMaintenance;
