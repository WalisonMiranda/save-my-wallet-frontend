import { useEffect, useState } from "react";
import { ref, onValue, off, Unsubscribe } from "firebase/database";
import { database } from "../services/firebaseConfig"; // Ajuste o caminho conforme necessário
import { useAuthStore } from "../store/authStore"; // Ajuste o caminho conforme necessário

type TransactionsProps = {
  id: string;
  transaction: {
    amount: string;
    description: string;
    date: string;
  };
};

export function TransactionsHistory() {
  const { user } = useAuthStore(); // Assume que useAuthStore retorna o usuário logado
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;

    if (!user) return;

    const transactionRef = ref(database, `users/${user.id}/user_transactions`);

    // eslint-disable-next-line prefer-const
    unsubscribe = onValue(transactionRef, (snapshot) => {
      const data = snapshot.val();
      const transactionsArray = Object.keys(data).map((key) => ({
        id: key,
        transaction: data[key],
      }));
      setTransactions(transactionsArray);
    });
  }, [user]);

  useEffect(() => {
    console.log(transactions);
  }, []);

  return (
    <div>
      <h2>Transações</h2>
      <ul>
        {transactions?.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.transaction.amount} - </span>
            <span>{transaction.transaction.description} - </span>
            <span>{transaction.transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
