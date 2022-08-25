import { createSlice } from "@reduxjs/toolkit";
import {navbars} from '../data'
const navbarSlice = createSlice({
    name: "links",
    initialState: {
        links: navbars,
        isNavbarOpen: false,
    },
    reducers: {
        openNavbar(state,action){
            state.isNavbarOpen = true;
        },
        closeNavbar(state, action){
            state.isNavbarOpen = false;
        }
    }
})

export const navbarActions = navbarSlice.actions;

export default navbarSlice;