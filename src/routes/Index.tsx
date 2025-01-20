import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Case from "../pages/Case";
import Blog from "../pages/Blog";
import Services from "../pages/Services";
import Spesialists from "../pages/Spesialists";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case" element={<Case />} />
        <Route path="/daCode-spesialists" element={<Spesialists />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
