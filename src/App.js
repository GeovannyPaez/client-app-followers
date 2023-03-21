import { Layout } from "./components/layout";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./routes/Profile";
import { Login } from "./routes/Login";
import { RegisterFollower } from "./routes/RegisterFollower";
import { SearchUsers } from "./routes/SearchUsers";
import { NavBar } from "./components/NavBar";
import { ContexApp } from "./context";
import { useContext } from "react";
function App() {
  const {updateState:{onVerifyLogin}} = useContext(ContexApp);
  
  return (
    <HashRouter>
      
        <Layout>
          <Routes>
            <Route path="/" element={onVerifyLogin(<Profile/>)} />
            <Route path="/login" element={<Login />} />
            <Route path="/search-user" element={onVerifyLogin(<SearchUsers />)} />
            <Route path="/register-follower" element={onVerifyLogin(<RegisterFollower />)} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
          <NavBar />
        </Layout>
        
    
    </HashRouter>
  );
}

export default App;
