import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { useAuthStore } from "../store/authStore";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO: Error feedback

  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center font-bold text-2xl text-slate-400">
        <h1>Save my</h1>
        <h1>Wallet</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-xs mt-6 flex flex-col gap-4 text-white placeholder:text-gray-300"
      >
        <InputGroup>
          <InputLeftAddon backgroundColor="transparent">
            <EmailIcon />
          </InputLeftAddon>
          <Input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon backgroundColor="transparent">
            <LockIcon />
          </InputLeftAddon>
          <Input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button
          width="100%"
          type="submit"
          isDisabled={email.trim() === "" || password.trim() === ""}
        >
          Entrar
        </Button>
      </form>
      <div className="mt-4 flex items-center gap-2">
        <p className="text-sm text-gray-200">Não possui uma conta? </p>{" "}
        <a
          href="/signUp"
          className="text-green-600 underline hover:opacity-70 transition-colors"
        >
          Cadastrar
        </a>
      </div>
    </div>
  );
}
