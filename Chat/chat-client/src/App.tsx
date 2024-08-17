import { Button } from "@/components/ui/button";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
