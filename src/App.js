import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import { ContextProvider } from "./context/context";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
