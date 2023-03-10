import { Button } from "@mui/material"
import { Divider } from "../../ui/ui"

import OrderItem from "./OrderItem";

export default function Order({orderDetails, ratedItems, orderNumber, userId, loadUserRatedItems}){
    // console.log(orderDetails);

    const totalQuantity = function(){
        let totalQuantity = 0;

        orderDetails.order.forEach(order => {
            totalQuantity += order.quantity;
        })

        return totalQuantity;
    }();

    function rateItem(itemId, value){
        fetch(`/${userId}/rateItem`, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({itemId: itemId, value: value})
        })
        .then(response => response.json())
        .then(response => {
            if(response.success){
                console.log('Item rated');
                loadUserRatedItems();
            }
        })
    }

    return (
        <div className="card-light" style={{width: '25rem', padding: '1.5rem 0 1rem 0', marginRight: '1rem'}}>
            <div style={{padding: '0 1rem', marginBottom: '1rem'}}>
                <h3>Order #{orderNumber}</h3>
                <p style={{margin: '0.5rem 0'}}><strong>To:</strong> {orderDetails.address}</p>
            </div>

            <Divider color='#E0E0E0' height='1px' margin='1rem 0'/>


            {orderDetails.order.map(order => {
                return (
                    <OrderItem 
                        key={order.itemId}
                        order={order}
                        ratedItems={ratedItems}
                        rateItem={rateItem}
                    />
                )
            })}
            

            {/* <div className="row-alignment"  style={{padding: '0 1rem'}}>
                <p style={{width: '12rem'}}>Penne Alfredo</p>
                <div className="column-alignment">
                    <p><strong>Qty:</strong> 3</p>
                    <Button color="warning" disabled><strong>Rate</strong></Button>
                </div>
            </div>

            <Divider color='#E0E0E0' height='1px' margin='0.5rem 0'/> */}

            <div className="row-alignment" style={{padding: '0 1rem'}}>
                <div className="column-alignment">
                    <p style={{fontSize: '0.9rem', color: 'grey'}}>X{totalQuantity} Items</p>
                    <p style={{alignSelf: 'start'}}><strong>{orderDetails.totalAmount}</strong></p>
                </div>
                <div className='row-alignment' style={{alignSelf: 'center'}}>
                    <i class="fa-regular fa-circle-check fa-2x" style={{color: 'lightgreen', marginRight: '0.5rem'}}></i>
                    <p style={{alignSelf: 'center'}}>Completed</p>
                </div>
            </div>
        </div>
    )
}