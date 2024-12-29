import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
