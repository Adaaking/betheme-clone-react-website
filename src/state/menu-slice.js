
import { createSlice } from "@reduxjs/toolkit";
import { menus } from "../data";


const menuSlice = createSlice({
    name:'menu',
    initialState: {
        orders:[],
        showOrder: false,
        menuItems: menus,
        totalQuantity:0,
    },
    reducers: {
        addOrder(state,action){
            const newItem = action.payload;
            const existingItem = state.orders.find((item) => item.name === newItem.name);

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            }else{
                state.orders.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    quantity:1,
                    price : newItem.price,
                    totalPrice: newItem.price,
                    desc: newItem.desc
                })
            }
        },
        removeItem(state,action){
            const name = action.payload;
            const existingItem = state.orders.find((item) => item.name === name);
            if(existingItem.quantity === 1){
                state.orders = state.orders.filter((item) => item.name !== name);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        showOrder(state,action){
            state.showOrder = !state.showOrder
        }
    }
})

export const menuActions = menuSlice.actions;
export default menuSlice;