import { Button, Rating } from "@mui/material"
import { Divider } from "../../ui/ui"
import { useEffect, useState } from "react";

export default function OrderItem({order, ratedItems, rateItem}){
    const [displayRating, setDisplayRating] = useState(false);
    const [rateButtonDisabled, setRateButtonDisabled] = useState(checkItemAlreadyRated(order.itemId));

    useEffect(()=>{
        console.log('OrderItem useEffect working...');
        setRateButtonDisabled(checkItemAlreadyRated(order.itemId));
    }, [ratedItems])

    function checkItemAlreadyRated(id){
        if(ratedItems.length > 0){
            for(let i = 0; i < ratedItems.length; i++){
                if(ratedItems[i] === id){
                    console.log('Item id found in ratedItems'); 
                    return true;
                }
            }
        }

        return false;
    }

    return (
        <>
            <div className="row-alignment"  style={{padding: '0 1rem'}}>
                <p style={{width: '12rem'}}> {order.name} </p>
                <div className="column-alignment">
                    <p><strong>Qty:</strong> {order.quantity}</p>

                    {displayRating ? 
                        <Rating 
                            value={0}
                            onChange={(event, newValue) => {
                                rateItem(order.itemId, newValue);
                                setDisplayRating(false);
                            }}
                        />
                        :
                        <Button 
                            color="warning" 
                            disabled={rateButtonDisabled}
                            onClick={()=> setDisplayRating(true)}
                        ><strong>Rate</strong></Button>
                    }
                </div>
            </div>

            <Divider color='#E0E0E0' height='1px' margin='0.5rem 0'/>
        </>
    )
}