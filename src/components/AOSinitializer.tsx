"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-sine",
      once: true,
      //   disable: "phone",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
};

export default AOSInitializer;
