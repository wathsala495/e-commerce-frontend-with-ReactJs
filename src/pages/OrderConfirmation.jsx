import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = ({order}) => {
    const navigate=useNavigate()
  return (
    <div>
      <h2>Thank you foy your order</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad enim odio officiis doloribus magnam! Exercitationem tempore magnam, ad iusto expedita in ipsa, sapiente rem fugit recusandae excepturi, cupiditate sed?</p>
     <div>
        <h3>order Summary</h3>
        <p>Order Number:{order.orderNumber}</p>
        <div>
            <h2>Shipping Infomation</h2>
            <p>{order.shippingInformation.address}</p>
            <p>{order.shippingInformation.city}</p>
            <p>{order.shippingInformation.zipcode}</p>
        </div>
        <div>
            <h3>Product Orders</h3>
            {order.products.map((product)=>{
                return(
                    <div>
                        <p>{product.name} x {product.quantity}</p>
                        <p>{product.price * product.quantity}</p>
                        </div>
                )
            })}
        </div>
        <div>
            <span> Total Price:</span>
            <span>{order.totalPrice}</span>
            </div>
     </div>
     <button >Track Order</button>
     <button onClick={()=>navigate('/')}>Continue Shopping</button>
    </div>
  )
}

export default OrderConfirmation
