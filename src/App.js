import { Fragment } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import FormBeasiswa from "./pages/FormBeasiswa/FormBeasiswa";
import ListBeasiswa from "./pages/ListBeasiswa/ListBeasiswa";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="DaftarBeasiswa" element={<FormBeasiswa />} />
          <Route path="Hasil" element={<ListBeasiswa />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
