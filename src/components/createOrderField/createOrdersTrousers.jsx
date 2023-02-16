import "./createOrderField.css"
import {DryCleaning,Iron,LocalLaundryService,Science} from "@mui/icons-material";
import {useState} from "react";
import { useContext } from "react";
import CreateContext from "../orderSummaryContext/createContext";
const CreateOrderTrousers=()=>{
    const trouserHandling=useContext(CreateContext);
    const [washType,setWashType]=useState({washing:{setColor:false,cost:0},
        iron:{setColor:false,cost:0},
        drywash:{setColor:false,cost:0},
        chemicalwash:{setColor:false,cost:0}});
    const [quantity,setQuantity]=useState(0);
    const [totalcost,setTotalCost]=useState(0);
    const setWashTypeHandler=(type)=>{
        switch(type){
            case "washing":
                if(washType.washing.setColor)
                {
                    setWashType({...washType,washing:{setColor:false,cost:0}});
                    setTotalCost(totalcost-15);
                    trouserHandling.setDynamic({...trouserHandling.dynamic,
                        trousers:{...trouserHandling.dynamic.trousers,washing:{isValid:false,costPerUnit:0,type:""},
                        totalCost:trouserHandling.dynamic.trousers.totalCost-15
                         }
                    })
                }
                else{
                    setWashType({...washType,washing:{setColor:true,cost:15}});
                    setTotalCost(totalcost+15);
                    trouserHandling.setDynamic({...trouserHandling.dynamic,
                        trousers:{...trouserHandling.dynamic.trousers,washing:{isValid:true,costPerUnit:15,type:"washing,"},
                        totalCost:trouserHandling.dynamic.trousers.totalCost+15
                         }
                    })
                }
                break;
            case "iron":
                    if(washType.iron.setColor)
                    {
                        setWashType({...washType,iron:{setColor:false,cost:0}});
                        setTotalCost(totalcost-10);
                        trouserHandling.setDynamic({...trouserHandling.dynamic,
                            trousers:{...trouserHandling.dynamic.trousers,iron:{isValid:false,costPerUnit:0,type:""},
                            totalCost:trouserHandling.dynamic.trousers.totalCost-10
                             }
                        })
                    }
                    else{
                        setWashType({...washType,iron:{setColor:true,cost:10}});
                        setTotalCost(totalcost+10);
                        trouserHandling.setDynamic({...trouserHandling.dynamic,
                            trousers:{...trouserHandling.dynamic.trousers,iron:{isValid:true,costPerUnit:10,type:"ironing,"},
                            totalCost:trouserHandling.dynamic.trousers.totalCost+10
                             }
                        })
                    }
                    break;
            case "drywash":
                        if(washType.drywash.setColor)
                        {
                            setWashType({...washType,drywash:{setColor:false,cost:0}});
                            setTotalCost(totalcost-20);
                            trouserHandling.setDynamic({...trouserHandling.dynamic,
                                trousers:{...trouserHandling.dynamic.trousers,drywash:{isValid:false,costPerUnit:0,type:""},
                                totalCost:trouserHandling.dynamic.trousers.totalCost-20
                                 }
                            })
                        }
                        else{
                            setWashType({...washType,drywash:{setColor:true,cost:20}});
                            setTotalCost(totalcost+20);
                            trouserHandling.setDynamic({...trouserHandling.dynamic,
                                trousers:{...trouserHandling.dynamic.trousers,drywash:{isValid:true,costPerUnit:20,type:"drywash,"},
                                totalCost:trouserHandling.dynamic.trousers.totalCost+20
                                 }
                            })
                        }
                        break; 
             case "chemicalwash":
                    if(washType.chemicalwash.setColor)
                        {
                         setWashType({...washType,chemicalwash:{setColor:false,cost:0}});
                         setTotalCost(totalcost-20);
                         trouserHandling.setDynamic({...trouserHandling.dynamic,
                            trousers:{...trouserHandling.dynamic.trousers,chemicalwash:{isValid:false,costPerUnit:0,type:""},
                            totalCost:trouserHandling.dynamic.trousers.totalCost-20
                             }
                        })
                        }
                    else{
                          setWashType({...washType,chemicalwash:{setColor:true,cost:20}});
                          setTotalCost(totalcost+20);
                          trouserHandling.setDynamic({...trouserHandling.dynamic,
                            trousers:{...trouserHandling.dynamic.trousers,chemicalwash:{isValid:true,costPerUnit:20,type:"chemicalwash,"},
                            totalCost:trouserHandling.dynamic.trousers.totalCost+20
                             }
                        })
                         }
                    break; 
            default:
                setWashType({...washType});
                break;
    
        }
        }
        const quantityHandler=(e)=>{
            if(e.target.value<0)
            {
                 alert("please give a valid input");
            }
            else{
                setQuantity(e.target.value);
            }
    }
    const resetHandler=()=>{
        setWashType({washing:{setColor:false,cost:0},
         iron:{setColor:false,cost:0},
         drywash:{setColor:false,cost:0},
         chemicalwash:{setColor:false,cost:0}});
         setQuantity(0); 
         setTotalCost(0);
         trouserHandling.setDynamic({...trouserHandling.dynamic,
            trousers:{washing:{isValid:false,costPerUnit:0,type:""},
            iron:{isValid:false,costPerUnit:0,type:""},
            drywash:{isValid:false,costPerUnit:0,type:""},
            chemicalwash:{isValid:false,costPerUnit:0,type:""},
            isValidTrousers:false,
            quantity:0,
            totalCost:0
             }
        })
 } 
 const contextHandler=()=>{
    if(quantity>0)
    {
        let ans=quantity;
            trouserHandling.setDynamic({...trouserHandling.dynamic,
                    trousers:{...trouserHandling.dynamic.trousers,washing:{isValid:false,costPerUnit:0,type:""},
                    iron:{isValid:false,costPerUnit:0,type:""},
                    drywash:{isValid:false,costPerUnit:0,type:""},
                    chemicalwash:{isValid:false,costPerUnit:0,type:""},
                    isValidTrousers:true,
                    quantity:parseInt(ans),
                    totalCost:trouserHandling.dynamic.trousers.totalCost
                     }
                })
                
                //     console.log(shirtHandling.dynamic);
               
                // console.log("I am greter than 0")
    }
    else{
        trouserHandling.setDynamic({...trouserHandling.dynamic,
            trousers:{washing:{isValid:false,costPerUnit:0,type:""},
            iron:{isValid:false,costPerUnit:0,type:""},
            drywash:{isValid:false,costPerUnit:0,type:""},
            chemicalwash:{isValid:false,costPerUnit:0,type:""},
            isValidTrousers:false,
            quantity:0,
            totalCost:trouserHandling.dynamic.trousers.totalCost
             }
        })
                
                    // console.log(shirtHandling.dynamic);
                    // console.log("I am else Case");
    }
}
    return(
        <>
        <tr className="createOrderTableRow">
           <td>Trousers</td>
           <td><input type="number" id="createOrderQuantityInput"  placeholder="0" onChange={quantityHandler} onBlur={contextHandler} value={quantity}/></td>
            <td>
                <LocalLaundryService htmlColor={washType.washing.setColor?"blue":"#A0A0A0"} onClick={()=>{setWashTypeHandler("washing")}} /> 
                <Iron htmlColor={washType.iron.setColor?"blue":"#A0A0A0"} onClick={()=>{setWashTypeHandler("iron")}}/>
                <DryCleaning htmlColor={washType.drywash.setColor?"blue":"#A0A0A0"} onClick={()=>{setWashTypeHandler("drywash")}}/>
                <Science htmlColor={washType.chemicalwash.setColor?"blue":"#A0A0A0"} onClick={()=>{setWashTypeHandler("chemicalwash")}}/>
            </td>
            {quantity>0&&totalcost?<td>{quantity}X{totalcost}=<b>{quantity*totalcost}</b></td>:<td>--</td>}
            {quantity>0&&totalcost?<td><button onClick={resetHandler}>Reset</button></td>:null}
        </tr>
        </>
    )
}
export default CreateOrderTrousers;