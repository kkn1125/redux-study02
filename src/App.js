import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./apis/posts";
import Counter from "./components/Counter";
import { decrease, increase } from "./container/counter";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";

function App() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Page />} />
    </Routes>
  );
}

export default App;
