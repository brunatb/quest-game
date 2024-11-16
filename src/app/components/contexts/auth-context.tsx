"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/shared/protocols";
import { LoginButton } from "./login-button";
import { User as UserComponent } from "./user";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  populateUser: () => {},
  logout: () => {},
  user: undefined,
  isLoading: true,
  refreshCoins: () => Promise.resolve(),
});

export type AuthContextProps = {
  isLoggedIn?: boolean;
  populateUser: (user: User) => void;
  user?: User;
  isLoading: boolean;
  logout: () => void;
  refreshCoins: () => Promise<void>;
};

export default function AuthProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = usePathname();

  function populateUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(undefined);
    setIsLoggedIn(false);
    router.push("/");
  }

  async function refreshCoins() {
    if (!user) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wallet/coins?idUser=${user.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) return;

    const data = (await response.json()) as { coins: number };

    if (data.coins !== user.coins) {
      console.log(data.coins);
      populateUser({ ...user, coins: data.coins });
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      if (path === "/") {
        toast.success(
          "Você já está logado(a)!Estamos te redirecionando para a tela principal.",
          {
            toastId: "already-logged",
            autoClose: 1000,
            onClose: () => {
              router.push("/jogo");
            },
          }
        );
      }
      setUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      logout();
    }
  }, [loading, user]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        populateUser,
        user,
        isLoading: loading,
        logout,
        refreshCoins,
      }}
    >
      {loading && path !== '/' && <div className="w-full h-[60px]" />}
      {!loading && !isLoggedIn && path !== '/' && <LoginButton />}
      {!loading && isLoggedIn && user && path !== '/' && <UserComponent user={user} />}
      {children}
    </AuthContext.Provider>
  );
}

type Props = {
  children: React.ReactNode;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
