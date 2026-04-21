import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Post from "./component/post";
import Explaine from "./component/explain";
import FetchData from "./component/Apidata";
import {   ContextProvider } from "./context/contextData";

function App() {
 return (

    <ContextProvider>
        <h1>Hello, World!</h1>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />

        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/FetchData" element={<FetchData />} />
          <Route path="/post/:id" element={<Explaine />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
