import { useEffect } from "react";

import { useTransactions } from "../hooks/useTransactions";
import { useAuthStore } from "../store/authStore";

import { Header } from "../components";

export function Home() {
  // const { transactions } = useTransactions();
  const { authenticated } = useAuthStore();

  useEffect(() => {
    // console.log("transactions => ", transactions);
    console.log(authenticated);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center bg-gray-900">
      <Header />
      <div className="max-w-5xl"></div>
    </div>
  );
}
