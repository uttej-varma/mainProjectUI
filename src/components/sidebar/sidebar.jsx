import {Home,AddCircleOutline,ReadMore} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CreateContext from "../orderSummaryContext/createContext";
import { useContext } from "react";
import "./sidebar.css"

const SideBar=()=>{
    
    const summaryHandling=useContext(CreateContext);
    const navigate=useNavigate();
    const goTocreateOrder=()=>{
       
        summaryHandling.setDynamic(
            {
                shirts:{washing:{isValid:false,costPerUnit:0,type:""},
                iron:{isValid:false,costPerUnit:0,type:""},
                drywash:{isValid:false,costPerUnit:0,type:""},
                chemicalwash:{isValid:false,costPerUnit:0,type:""},
                isValidShirts:false,
                quantity:0,
                totalCost:0
                
                 },tShirts:{washing:{isValid:false,costPerUnit:0,type:""},
                 iron:{isValid:false,costPerUnit:0,type:""},
                 drywash:{isValid:false,costPerUnit:0,type:""},
                 chemicalwash:{isValid:false,costPerUnit:0,type:""},
                 isValidTShirts:false,
                 quantity:0,
                 totalCost:0
               
                  },
                  trousers:{washing:{isValid:false,costPerUnit:0,type:""},
                 iron:{isValid:false,costPerUnit:0,type:""},
                 drywash:{isValid:false,costPerUnit:0,type:""},
                 chemicalwash:{isValid:false,costPerUnit:0,type:""},
                 isValidTrousers:false,
                 quantity:0,
                 totalCost:0
               
                  },
                  jeans:{washing:{isValid:false,costPerUnit:0,type:""},
                 iron:{isValid:false,costPerUnit:0,type:""},
                 drywash:{isValid:false,costPerUnit:0,type:""},
                 chemicalwash:{isValid:false,costPerUnit:0,type:""},
                 isValidJeans:false,
                 quantity:0,
                 totalCost:0
               
                  },
                  boxers:{washing:{isValid:false,costPerUnit:0,type:""},
                 iron:{isValid:false,costPerUnit:0,type:""},
                 drywash:{isValid:false,costPerUnit:0,type:""},
                 chemicalwash:{isValid:false,costPerUnit:0,type:""},
                 isValidBoxers:false,
                 quantity:0,
                 totalCost:0
               
                  },
                  joggers:{washing:{isValid:false,costPerUnit:0,type:""},
                 iron:{isValid:false,costPerUnit:0,type:""},
                 drywash:{isValid:false,costPerUnit:0,type:""},
                 chemicalwash:{isValid:false,costPerUnit:0,type:""},
                 isValidJoggers:false,
                 quantity:0,
                 totalCost:0
               
                  },
                  others:{washing:{isValid:false,costPerUnit:0,type:""},
                  iron:{isValid:false,costPerUnit:0,type:""},
                  drywash:{isValid:false,costPerUnit:0,type:""},
                  chemicalwash:{isValid:false,costPerUnit:0,type:""},
                  isValidOthers:false,
                  quantity:0,
                  totalCost:0
                
                   },
                   userFrontend:{
                    userName:"",
                    address:"",
                    location:""
                   }
                   
                  
        
              }
        )

        navigate("/createOrderPage")
    }
    const goToOrderList=async()=>{
        
        navigate("/userOrderList")
    }
return(
    <>
    <aside id="asidebarContainer">
       <Home/>
       <AddCircleOutline onClick={goTocreateOrder} />
       <ReadMore onClick={goToOrderList} />

    </aside>
    </>
)
}
export default SideBar;