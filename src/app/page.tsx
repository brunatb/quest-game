import dynamic from "next/dynamic";
import { AuthComponent } from "./auth-component";
import { LogoQueston } from "./components/logo";

const AuthProvider = dynamic(
  () => import("./components/contexts/auth-context")
);

export default function Home() {
  return (
    <AuthProvider>
      <div className="md:grid md:grid-cols-5 w-full h-full">
        <div
          className="md:block col-span-3 w-full h-full hidden"
          // background image is on public/images/background.jpg
          style={{
            backgroundImage: `url(/images/bg-quest.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
        <div className="col-span-2 w-full h-full bg-background-game">
          <div className="flex flex-col items-center justify-center h-full">
            <LogoQueston />
            <AuthComponent />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
