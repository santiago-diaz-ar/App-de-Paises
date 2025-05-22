import { Route, Routes } from "react-router-dom";
import Landing from "./landing/Landing.jsx";
import Home from "./home/Home.jsx";
import Detail from "./detail/detail.jsx";
import Form from "./form/Form.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}
