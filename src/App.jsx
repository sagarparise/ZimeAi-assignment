import "./App.css";
import TablePage from "./components/TablePage";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home />} />
            <Route path="/table" element={<TablePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
