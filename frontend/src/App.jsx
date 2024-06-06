import { Router } from "./routes/Routers";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
