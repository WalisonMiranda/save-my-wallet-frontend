import { useEffect, useState } from "react";
import {Form} from '"@chakra-ui/react'

// import { formatter } from "../helpers/numberFormat";

interface TransactionInterface {
  id: string;
  transaction: {
    amount: string;
    description: string;
    date: string;
  };
}

export function Panel() {
  // const [balance, setBalance] = useState<string>("0,00");
  // const [transactions, setTransactions] = useState<TransactionInterface[]>([]);

  // useEffect(() => {
  //   let totalBalance = transactions.map((item) => {
  //     console.log(item.transaction);
  //     return item;
  //   });
  //   }).reduce((acc, value) => {
  //       return acc + value.transaction.amount;
  //   }, 0).toString();
  //   console.log(totalBalance);
  //   if(totalBalance > 0) {
  //       setBalance(totalBalance);
  //   }
  // }, [transactions]);

  return (
    <div>
      <div>
        <p>Balanço</p>
        <p>R$ 0.000,00</p>
      </div>
      <div>
        <Form buttonColor="var(--green)" buttonType="Adicionar" />
        {/* <Form buttonColor="var(--red)" buttonType="Retirar" /> */}
      </div>
    </div>
  );
}
