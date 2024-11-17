import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "../globals.css";

const AuthProvider = dynamic(
  () => import("../components/contexts/auth-context"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Quest - O seu jogo de perguntas e respostas",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full min-h-dvh h-dvh`}>
      {/* Overlay container */}
      <div className="inset-0 bg-black opacity-70 z-10 fixed"></div>

      {/* Background image */}
      <div
        className="flex w-full min-h-[calc(100% - 60px)]  bg-cover z-0 fixed"
        style={{
          backgroundImage: `url(/images/bg-quest.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "100%",
          opacity: 0.75,
        }}
      ></div>

      {/* Main content */}
      <AuthProvider>
        <div
          className="w-full flex items-center justify-center flex-col relative z-10 text-white"
          style={{
            minHeight: "calc(100% - 64px)",
          }}
        >
          {children}
        </div>
      </AuthProvider>
    </div>
  );
}
