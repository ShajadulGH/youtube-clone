import { ContextProvider } from "./context/context";
function App() {
  return (
    <ContextProvider>
      <div>Hi!</div>
    </ContextProvider>
  );
}

export default App;
