import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notification: {
        message: null,
        type:null,
        isEmail:false,
        open: false,
    }},
    reducers: {
        showNotification(state,action){
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
                isEmail: action.payload.isEmail
            }
        }
    }
})

export const notActions = notificationSlice.actions;

export default notificationSlice;

