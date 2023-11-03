import { Routes, Route } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/forms/Login";
import { Register } from "./components/pages/forms/Register";
import { Forgot } from "./components/pages/forms/Forgot";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./components/pages/forms/usersSlice";
import { fetchFoods } from "./components/Main/foodsSlice";
import { FoodDetails } from "./components/pages/FoodDetails";
import { FavoriteFood } from "./components/pages/FavoriteFood";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchFoods());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/favoriteFood" element={<FavoriteFood />} />
      </Routes>
    </div>
  );
}

export default App;
