import "./App.css";
import TablePage from "./components/TablePage";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
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
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
