import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateOrder from "./components/createOrder/createOrder";
import LoginPage from "./components/loginpage/loginPage";

import RegistrationForm from "./components/registration/registrationForm";
import CreateOrderLanding from "./components/createOrderLandingPage/createOrderLandingPage";
import CreateContextProvider from "./components/contextOrderProvider/createContextProvider";
import OrderList from "./components/orderlist/orderList";

// import OrderList from "./components/orderlist/orderList";



function App() {
 return(
  <>
  <BrowserRouter>
  <CreateContextProvider>
  <Routes>
    <Route path="/" element={<RegistrationForm/>}/>
    <Route path="login" element={<LoginPage/>}/>
    <Route path="createOrderLanding" element={<CreateOrderLanding/>}/>
    <Route path="createOrderPage" element={<CreateOrder/>}/>
    <Route path="userOrderList" element={<OrderList/>}/>
  </Routes>
  </CreateContextProvider>
  
  </BrowserRouter>
  </>
 )
}

export default App;
