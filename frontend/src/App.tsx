import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/Layouts/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
