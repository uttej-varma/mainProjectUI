import "./createOrderField.css"
import {DryCleaning,Iron,LocalLaundryService,Science} from "@mui/icons-material";
import {useState} from "react";
import { useContext } from "react";
import CreateContext from "../orderSummaryContext/createContext";
const CreateOrderJeans=()=>{
    const jeanHandling=useContext(CreateContext);
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
                    jeanHandling.setDynamic({...jeanHandling.dynamic,
                        jeans:{...jeanHandling.dynamic.jeans,washing:{isValid:false,costPerUnit:0,type:""},
                        totalCost:jeanHandling.dynamic.jeans.totalCost-15
                         }
                    })
                }
                else{
                    setWashType({...washType,washing:{setColor:true,cost:15}});
                    setTotalCost(totalcost+15);
                    jeanHandling.setDynamic({...jeanHandling.dynamic,
                        jeans:{...jeanHandling.dynamic.jeans,washing:{isValid:true,costPerUnit:15,type:"washing,"},
                        totalCost:jeanHandling.dynamic.jeans.totalCost+15
                         }
                    })
                }
                break;
            case "iron":
                    if(washType.iron.setColor)
                    {
                        setWashType({...washType,iron:{setColor:false,cost:0}});
                        setTotalCost(totalcost-10);
                        jeanHandling.setDynamic({...jeanHandling.dynamic,
                            jeans:{...jeanHandling.dynamic.jeans,iron:{isValid:false,costPerUnit:0,type:""},
                            totalCost:jeanHandling.dynamic.jeans.totalCost-10
                             }
                        })
                    }
                    else{
                        setWashType({...washType,iron:{setColor:true,cost:10}});
                        setTotalCost(totalcost+10);
                        jeanHandling.setDynamic({...jeanHandling.dynamic,
                            jeans:{...jeanHandling.dynamic.jeans,iron:{isValid:true,costPerUnit:10,type:"ironing"},
                            totalCost:jeanHandling.dynamic.jeans.totalCost+10
                             }
                        })
                    }
                    break;
            case "drywash":
                        if(washType.drywash.setColor)
                        {
                            setWashType({...washType,drywash:{setColor:false,cost:0}});
                            setTotalCost(totalcost-20);
                            jeanHandling.setDynamic({...jeanHandling.dynamic,
                                jeans:{...jeanHandling.dynamic.jeans,drywash:{isValid:false,costPerUnit:0,type:""},
                                totalCost:jeanHandling.dynamic.jeans.totalCost-20
                                 }
                            })
                        }
                        else{
                            setWashType({...washType,drywash:{setColor:true,cost:20}});
                            setTotalCost(totalcost+20);
                            jeanHandling.setDynamic({...jeanHandling.dynamic,
                                jeans:{...jeanHandling.dynamic.jeans,drywash:{isValid:false,costPerUnit:20,type:"drywash,"},
                                totalCost:jeanHandling.dynamic.jeans.totalCost+20
                                 }
                            })
                        }
                        break; 
             case "chemicalwash":
                    if(washType.chemicalwash.setColor)
                        {
                         setWashType({...washType,chemicalwash:{setColor:false,cost:0}});
                         setTotalCost(totalcost-20);
                         jeanHandling.setDynamic({...jeanHandling.dynamic,
                            jeans:{...jeanHandling.dynamic.jeans,chemicalwash:{isValid:false,costPerUnit:0,type:""},
                            totalCost:jeanHandling.dynamic.jeans.totalCost-20
                             }
                        })
                        }
                    else{
                          setWashType({...washType,chemicalwash:{setColor:true,cost:20}});
                          setTotalCost(totalcost+20);
                          jeanHandling.setDynamic({...jeanHandling.dynamic,
                            jeans:{...jeanHandling.dynamic.jeans,chemicalwash:{isValid:true,costPerUnit:20,type:"chemicalwash"},
                            totalCost:jeanHandling.dynamic.jeans.totalCost+20
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
         jeanHandling.setDynamic({...jeanHandling.dynamic,
            jeans:{...jeanHandling.dynamic.jeans,washing:{isValid:false,costPerUnit:0,type:""},
            iron:{isValid:false,costPerUnit:0,type:""},
            drywash:{isValid:false,costPerUnit:0,type:""},
            chemicalwash:{isValid:false,costPerUnit:0,type:""},
            isValidJeans:false,
            quantity:0,
            totalCost:0}
        })
        
 } 
 const contextHandler=()=>{
    if(quantity>0)
    {
        let ans=quantity;
        jeanHandling.setDynamic({...jeanHandling.dynamic,
            jeans:{...jeanHandling.dynamic.jeans,washing:{isValid:false,costPerUnit:0,type:""},
            iron:{isValid:false,costPerUnit:0,type:""},
            drywash:{isValid:false,costPerUnit:0,type:""},
            chemicalwash:{isValid:false,costPerUnit:0,type:""},
            isValidJeans:true,
            quantity:parseInt(ans),
            totalCost:jeanHandling.dynamic.jeans.totalCost}
        })
                
                //     console.log(shirtHandling.dynamic);
               
                // console.log("I am greter than 0")
    }
    else{
        jeanHandling.setDynamic({...jeanHandling.dynamic,
            jeans:{...jeanHandling.dynamic.jeans,washing:{isValid:false,costPerUnit:0,type:""},
            iron:{isValid:false,costPerUnit:0,type:""},
            drywash:{isValid:false,costPerUnit:0,type:""},
            chemicalwash:{isValid:false,costPerUnit:0,type:""},
            isValidJeans:false,
            quantity:0,
            totalCost:jeanHandling.dynamic.jeans.totalCost}
        })
                    // console.log(shirtHandling.dynamic);
                    // console.log("I am else Case");
    }
}
    return(
        <>
        <tr className="createOrderTableRow">
           <td>Jeans</td>
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
export default CreateOrderJeans;