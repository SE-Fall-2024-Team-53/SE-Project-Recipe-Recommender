import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Recipes from "./Components/Recipes";
import RecipeRecommendations from "./Components/RecipeRecommendations";
import NavBar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="recipes" element={<Recipes/>} />
          <Route path="recommendations" element={<RecipeRecommendations/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;