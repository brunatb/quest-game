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
    <div className={`w-full h-dvh`}>
      <div
        className="flex w-full h-[calc(100% - 60px)] absolute bg-cover opacity-50"
        // background image is on public/images/background.jpg
        style={{
          backgroundImage: `url(/images/bg-quest.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "100%",
          opacity: 0.15,
        }}
      ></div>
      <AuthProvider>
        <div
          className="w-full flex items-center justify-center flex-col relative z-10 "
          style={{
            height: "calc(100% - 64px)",
          }}
        >
          {children}
        </div>
      </AuthProvider>
    </div>
  );
}