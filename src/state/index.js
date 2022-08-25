import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";
import menuSlice from "./menu-slice";
import navbarSlice from "./navbar-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
    reducer: {
        navbar: navbarSlice.reducer,
        menu: menuSlice.reducer,
        event: eventSlice.reducer,
        notify: notificationSlice.reducer
    }
})

export default store;