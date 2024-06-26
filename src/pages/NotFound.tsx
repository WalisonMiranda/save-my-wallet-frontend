import { useState, useEffect } from "react";

import { formatter } from "../helpers/numberFormat";

export function NotFound() {
  const [lostMoney, setLostMoney] = useState(1000);

  const randomMoneyLost = () => {
    const money = Math.floor(Math.random() * 10);
    return money;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (lostMoney > 0) {
      interval = setInterval(() => {
        setLostMoney((lostMoney) => lostMoney - randomMoneyLost());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [lostMoney]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <div className="p-4 text-center">
        <p className="text-6xl mb-2">404</p>
        <hr className="w-36 mx-auto border-gray-400 my-2" />
        <p className="text-3xl mb-8">Página não encontrada</p>
      </div>
      <div className="mt-4 px-8 py-8">
        <p className="text-2xl text-center">
          😢{" "}
          {lostMoney < 0
            ? formatter((0).toString())
            : formatter(lostMoney.toString())}
        </p>
      </div>
    </div>
  );
}
