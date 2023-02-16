import CreateContext from "../orderSummaryContext/createContext";
import { useState } from "react";
const CreateContextProvider=(props)=>{
    const [summaryDynamic,setSummaryDynamic]=useState({
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
           
          

      })
   return(
    <>
     <CreateContext.Provider value={{dynamic:summaryDynamic,setDynamic:setSummaryDynamic}}>
         {props.children}
    </CreateContext.Provider>
    </>
   )
}
export default CreateContextProvider;