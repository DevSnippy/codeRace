import React from "react";
import WebNav from "./components/WebNav";
import HomePage from "./components/home_page/homePage";
import AboutPage from "./components/about_page/about";
import BenchmarkPage from "./components/benchmark_page/benchmark_page";
import QuickSortPage from "./components/quickSort_page/quickSort_page";
import CryptoPage from "./components/crypto_page/crypto_page";
import QuickSortBenchmark from "./components/Graphs_page_quicksort/graphs";
import SortedPage from "./components/SortedPage"; // Adjust path as needed
import Data10mbPage from "./components/Data10mbPage"; // Adjust path as needed
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="bg-blue-900">
          <WebNav />
        </div>
        <div className="bg-gray-950 text-gray-400">
          <Routes>
            <Route path="/QuickSort-Graph" element={<QuickSortBenchmark />} />
            <Route path="/crypto" element={<CryptoPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/fetch" element={<BenchmarkPage />} />
            <Route path="/quickSort" element={<QuickSortPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/jsons/sorted" element={<SortedPage />} />
            <Route path="/jsons/10mb" element={<Data10mbPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
