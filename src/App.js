import Sidebar from "./components/sidebar/Sidebar";
import Topbar  from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import UserList from "./pages/UserLIst/UserLIst";
import Users from "./pages/User/Users";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home/>}/>
  
          <Route path="/users" element={<UserList />} />
      
          <Route path="/users/:userId"  element={ <Users/>}/>
           
      
          <Route path="/products" element={<ProductList />} />
            
          <Route path="/products/:productId" element={<Product/>}>
            
          </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
