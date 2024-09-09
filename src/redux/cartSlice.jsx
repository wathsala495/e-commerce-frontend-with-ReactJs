import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    totalQuanity:0,
    totalPrice:0
}

const cartSlice=createSlice({
     name:"cart",
     initialState,
     reducers:{
         addTOCart(state,action){
            const newitem =action.payload;
            const itemIndex=state.products.find((item)=>item.id===newitem.id)
            if(itemIndex){
                itemIndex.quantity++;
                itemIndex.totalPrice +=newitem.price
            }
            else{
                state.products.push({
                    id:newitem.id,
                name:newitem.name,
                price:newitem.price,
                quantity:1,
                totalPrice:newitem.price,
                image:newitem.image
                })
            }
            state.totalPrice+=newitem.price
            state.totalQuanity++
         },
         removeFromCart(state,action){
            const id =action.payload;
            const finditem=state.products.find((item)=>item.id===id)
            if(finditem){
                state.totalPrice-=finditem.totalPrice
                state.totalQuanity-=finditem.quantity
                state.products=state.products.filter((item)=>item.id!==id)
            }

         },
         increaseQuantity(state,action){
            const id=action.payload;
            const findItem= state.products.find((item)=>item.id==id)
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice+=findItem.price
                state.totalQuanity++
                state.totalPrice+=findItem.price
            }
         },
         dcreaseQuantity(state,action){
            const id=action.payload;
            const findItem= state.products.find((item)=>item.id==id)
            if(findItem.quantity>1){
                if(findItem){
                    findItem.quantity--;
                    findItem.totalPrice-=findItem.price
                    state.totalQuanity--
                    state.totalPrice-=findItem.price
                }
            }
            
         }
     }
})
export const {addTOCart,removeFromCart,increaseQuantity,dcreaseQuantity} =cartSlice.actions
export default cartSlice.reducer
//1:37