import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { api } from "../services/api";

interface TransactionInterface {
  id: number;
  ammount: number;
  category: "Despesa" | "Recebimento";
  description: string;
  date: string;
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);

  const { token } = useAuthStore();

  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get("/transaction", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // setTransactions(response.data.transactions);

      console.log(response);
    };

    getTransactions();
  });

  return { transactions };
}
