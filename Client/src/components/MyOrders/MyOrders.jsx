import Navbar from "../Navbar"
import { Heading } from "../../ui/ui"
import Order from "./Order"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function MyOrders(){
    const [ratedItems, setRatedItems] = useState([]);
    const [orders, setOrders] = useState([]);

    const {userId} = useParams();

    useEffect(()=>{
        document.title = 'UnderBelly Express | My Orders';

        loadUserRatedItems();

        fetch(`/${userId}/orders`)
        .then(response => response.json())
        .then(response => {
            setOrders(response.orders);
            console.log(response.orders);
        })
    }, [])

    function loadUserRatedItems(){
        fetch(`/${userId}/ratedItems`)
        .then(response => response.json())
        .then(response => {
            setRatedItems(response.itemsRated);
        })
    }

    return (
        <div className="dark-background">
            <Navbar />

            <div id="cart-heading-background">
                <Heading style={{textAlign: 'center'}}>My Orders</Heading>
            </div>

            <section id='my-orders-section'>
                <Heading style={{paddingLeft: '2rem'}}>Orders List</Heading>
                
                <div style={{display: 'flex'}}>
                    {orders.map((order, index) => {
                        return <Order 
                            key={order._id}
                            orderDetails={order}
                            ratedItems={ratedItems}
                            orderNumber={`${index + 1}`}
                            userId={userId}
                            loadUserRatedItems={loadUserRatedItems}
                        />
                    })}
                </div>
            </section>
        </div>
    )
}