import CreateContext from "../orderSummaryContext/createContext";
import { useContext } from "react";
const CreateSummaryBody=()=>{
    const summaryMaking=useContext(CreateContext);
    return(
        <>
         {summaryMaking.dynamic.shirts.isValidShirts===true?
                            <tr>
                                <td>Shirts</td>
                                <td>{summaryMaking.dynamic.shirts.washing.type}{summaryMaking.dynamic.shirts.iron.type}
                                     {summaryMaking.dynamic.shirts.drywash.type}{summaryMaking.dynamic.shirts.chemicalwash.type}
                                </td>
                                {/* <td>{summaryMaking.dynamic.shirts.quantity}*{summaryMaking.dynamic.shirts.washing.costPerUnit+
                                       summaryMaking.dynamic.shirts.iron.costPerUnit+summaryMaking.dynamic.shirts.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.shirts.drywash.costPerUnit
                                     }
                                 </td> */}
                                 <td>
                                 {summaryMaking.dynamic.shirts.quantity}*{summaryMaking.dynamic.shirts.totalCost}
                                 </td>
                                 <td>{summaryMaking.dynamic.shirts.quantity*summaryMaking.dynamic.shirts.totalCost}</td>

                            </tr>:null
                    }
                    {summaryMaking.dynamic.tShirts.isValidTShirts===true?
                            <tr>
                                <td>T-Shirts</td>
                                <td>{summaryMaking.dynamic.tShirts.washing.type }{summaryMaking.dynamic.tShirts.iron.type}
                                     {summaryMaking.dynamic.tShirts.drywash.type}{summaryMaking.dynamic.tShirts.chemicalwash.type}
                                </td>
                                {/* <td>{summaryMaking.dynamic.tShirts.quantity}*{summaryMaking.dynamic.tShirts.washing.costPerUnit+
                                       summaryMaking.dynamic.tShirts.iron.costPerUnit+summaryMaking.dynamic.tShirts.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.tShirts.drywash.costPerUnit
                                     }
                                 </td> */}
                                  <td>
                                 {summaryMaking.dynamic.tShirts.quantity}*{summaryMaking.dynamic.tShirts.totalCost}
                                 </td>
                                 
                                 <td>{summaryMaking.dynamic.tShirts.quantity*summaryMaking.dynamic.tShirts.totalCost}</td>

                            </tr>:null
                    }    
                    {summaryMaking.dynamic.trousers.isValidTrousers===true?
                            <tr>
                                <td>Trousers</td>
                                <td>{summaryMaking.dynamic.trousers.washing.type }{summaryMaking.dynamic.trousers.iron.type}
                                     {summaryMaking.dynamic.trousers.drywash.type}{summaryMaking.dynamic.trousers.chemicalwash.type}
                                </td>
                                {/* <td>{summaryMaking.dynamic.trousers.quantity}*{summaryMaking.dynamic.trousers.washing.costPerUnit+
                                       summaryMaking.dynamic.trousers.iron.costPerUnit+summaryMaking.dynamic.trousers.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.trousers.drywash.costPerUnit
                                     }
                                 </td> */}
                                 <td>{summaryMaking.dynamic.trousers.quantity}*{summaryMaking.dynamic.trousers.totalCost}</td>
                                 <td>{summaryMaking.dynamic.trousers.quantity*summaryMaking.dynamic.trousers.totalCost}</td>

                            </tr>:null
                    }   
                    {summaryMaking.dynamic.jeans.isValidJeans===true?
                            <tr>
                                <td>Jeans</td>
                                <td>{summaryMaking.dynamic.jeans.washing.type }{summaryMaking.dynamic.jeans.iron.type}
                                     {summaryMaking.dynamic.jeans.drywash.type}{summaryMaking.dynamic.jeans.chemicalwash.type}
                                </td>
                                {/* <td>{summaryMaking.dynamic.jeans.quantity}*{summaryMaking.dynamic.jeans.washing.costPerUnit+
                                       summaryMaking.dynamic.jeans.iron.costPerUnit+summaryMaking.dynamic.jeans.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.jeans.drywash.costPerUnit
                                     }
                                 </td> */}
                                 <td>{summaryMaking.dynamic.jeans.quantity}*{summaryMaking.dynamic.jeans.totalCost}</td>
                                 <td>{summaryMaking.dynamic.jeans.quantity*summaryMaking.dynamic.jeans.totalCost}</td>

                            </tr>:null
                    }  
                     {summaryMaking.dynamic.boxers.isValidBoxers===true?
                            <tr>
                                <td>Boxers</td>
                                <td>{summaryMaking.dynamic.boxers.washing.type }{summaryMaking.dynamic.boxers.iron.type}
                                     {summaryMaking.dynamic.boxers.drywash.type}{summaryMaking.dynamic.boxers.chemicalwash.type}
                                </td>
                                {/* <td>{summaryMaking.dynamic.boxers.quantity}*{summaryMaking.dynamic.boxers.washing.costPerUnit+
                                       summaryMaking.dynamic.boxers.iron.costPerUnit+summaryMaking.dynamic.boxers.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.boxers.drywash.costPerUnit
                                     }
                                 </td> */}
                                 <td>{summaryMaking.dynamic.boxers.quantity}*{summaryMaking.dynamic.boxers.totalCost}</td>
                                 <td>{summaryMaking.dynamic.boxers.quantity*summaryMaking.dynamic.boxers.totalCost}</td>

                            </tr>:null
                    }  
                    {summaryMaking.dynamic.joggers.isValidJoggers===true?
                            <tr>
                                <td>Joggers</td>
                                <td>{summaryMaking.dynamic.joggers.washing.type }{summaryMaking.dynamic.joggers.iron.type}
                                     {summaryMaking.dynamic.joggers.drywash.type}{summaryMaking.dynamic.joggers.chemicalwash.type}
                                </td>
                                {/* <td>{summaryMaking.dynamic.joggers.quantity}*{summaryMaking.dynamic.joggers.washing.costPerUnit+
                                       summaryMaking.dynamic.joggers.iron.costPerUnit+summaryMaking.dynamic.joggers.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.joggers.drywash.costPerUnit
                                     }
                                 </td> */}
                                 <td>{summaryMaking.dynamic.joggers.quantity}*{summaryMaking.dynamic.joggers.totalCost}</td>
                                 <td>{summaryMaking.dynamic.joggers.quantity*(summaryMaking.dynamic.joggers.washing.costPerUnit+
                                       summaryMaking.dynamic.joggers.iron.costPerUnit+summaryMaking.dynamic.joggers.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.joggers.drywash.costPerUnit)}</td>

                            </tr>:null
                    }   
                    {summaryMaking.dynamic.others.isValidOthers===true?
                            <tr>
                                <td>Others</td>
                                <td>{summaryMaking.dynamic.others.washing.type }{summaryMaking.dynamic.others.iron.type}
                                     {summaryMaking.dynamic.others.drywash.type}{summaryMaking.dynamic.others.chemicalwash.type}
                                </td>
                                {/* <td>{summaryMaking.dynamic.others.quantity}*{summaryMaking.dynamic.others.washing.costPerUnit+
                                       summaryMaking.dynamic.others.iron.costPerUnit+summaryMaking.dynamic.others.chemicalwash.costPerUnit+
                                       summaryMaking.dynamic.others.drywash.costPerUnit
                                     }
                                 </td> */}
                                 <td>{summaryMaking.dynamic.others.quantity}*{summaryMaking.dynamic.others.totalCost}</td>
                                 <td>{summaryMaking.dynamic.others.quantity*summaryMaking.dynamic.others.totalCost}</td>

                            </tr>:null
                    }   
        </>
    )
}

export default CreateSummaryBody;