"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/shared/protocols";

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  populateUser: () => {},
  user: undefined,
  isLoading: true,
});

export type AuthContextProps = {
  isLoggedIn?: boolean;
  populateUser: (user: User) => void;
  user?: User;
  isLoading: boolean;
};

export function AuthProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        populateUser,
        user,
        isLoading: loading,
      }}
    >
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
