"use client";
import { HoverBackground } from "@/components/ui/hover-background";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Placeholder() {
  return (
    <div className="w-full h-screen rounded-lg overflow-hidden">
      <HoverBackground
        colors={{
          background:
            "bg-gradient-to-br from-black via-[#0ebca6] via-[#197abf] to-[#0a0a0a]",
          objects: [
            "bg-emerald-500",
            "bg-teal-500",
            "bg-green-500",
            "bg-lime-500",
            "bg-cyan-500",
            "bg-blue-500",
          ],
          glow: "shadow-emerald-400/70",
        }}
        objectCount={12}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center place-items-center space-y-6 lg:max-w-3xl md:max-w-xl sm:max-w-sm px-6 lg:px-0">
            <div className="rounded-full h-20 w-20 overflow-clip">
              <Image
                src={"/logo.jpg"}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white/90 ">
              Welcome to the Lead Foundation
            </h2>
            <p className="text-md lg:text-lg text-emerald-100/80 max-w-lg ">
              Our foundation is built on action, not just aesthetics. While the
              site takes shape, our work continues in communities and hearts.
              Reach out to us anytime using any of the following medium
            </p>
            <div className="flex gap-4 items-center">
              <Link href={"tel:+2348065817154"}>
                <Phone color="white" />
              </Link>
              <Link href={"mailto:tleadfoundation@gmail.com"}>
                <Mail color="white" />
              </Link>
            </div>
          </div>
        </div>
      </HoverBackground>
    </div>
  );
}
