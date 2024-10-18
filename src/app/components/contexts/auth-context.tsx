"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AuthModal } from "../auth-modal";
import { User } from "@/shared/protocols";

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  populateUser: () => {},
  user: undefined,
});

export type AuthContextProps = {
  isLoggedIn?: boolean;
  populateUser: (user: User) => void;
  user?: User;
};

export function AuthProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const path = usePathname();
  const [user, setUser] = useState<User>();

  function populateUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
  }, []);

  const shouldShowLoginModal = useMemo(() => {
    return !isLoggedIn && path !== "/";
  }, [isLoggedIn, path]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        populateUser,
        user,
      }}
    >
      {children}
      {shouldShowLoginModal === true && <AuthModal />}
    </AuthContext.Provider>
  );
}

type Props = {
  children: React.ReactNode;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
