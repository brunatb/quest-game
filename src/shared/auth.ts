import { User } from "./protocols";

export const login = async (username: string, password: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (response.ok) {
    const user = await response.json();
    return user as User;
  } else {
    if (response.status === 401) {
      return { error: "Usuário ou senha incorretos" };
    }

    return {
      error: "Erro ao realizar login, tente novamente ou contate o suporte",
    };
  }
};

export const registration = async (username: string, password: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem("token", token);
  } else {
    if (response.status === 422) {
      return {
        error: "Usuário já cadastrado, tente outro nome de usuário",
      };
    }

    return {
      error: "Erro ao realizar cadastro, tente novamente ou contate o suporte",
    };
  }
};
