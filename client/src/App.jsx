import { Route, Routes } from "react-router-dom";
import Landing from "./landing/Landing.jsx";
import Home from "./home/Home.jsx"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}
