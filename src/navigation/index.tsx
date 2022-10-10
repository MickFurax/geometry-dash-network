import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Navigation;
function useState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
