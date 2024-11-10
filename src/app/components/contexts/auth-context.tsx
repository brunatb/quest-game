"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/shared/protocols";
import { LoginButton } from "./login-button";
import { User as UserComponent } from "./user";
import { useRouter } from "next/navigation";

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
      setUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

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
      {loading && <div className="w-full h-[60px]" />}
      {!loading && !isLoggedIn && <LoginButton />}
      {!loading && isLoggedIn && user && <UserComponent user={user} />}
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
