import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore";

export function Header() {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/signIn");
  };

  return (
    <div className="h-40 w-full max-w-5xl text-white flex flex-col items-center justify-between bg-gray-700">
      <div className="h-10 w-full flex justify-between bg-gray-900">
        <div>
          <span>{user?.name}</span>
        </div>
        <button onClick={handleLogout}>Sair</button>
      </div>
      <div className="w-full">
        <h1>Operações</h1>
      </div>
    </div>
  );
}
