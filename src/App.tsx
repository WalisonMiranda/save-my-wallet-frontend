import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./routes/PrivateRoute";
import { Login, Register, Home, NotFound } from "./pages";

// TODO: landing page???

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
