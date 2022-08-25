import { createSlice } from "@reduxjs/toolkit";
import { events } from "../data";

const eventSlice = createSlice({
    name : 'event',
    initialState : {
        liked: false,
        events: events
    },
    reducers:{
      like(state,action){
        const likedItem = state.events.find((event) => event.id === action.payload);
        likedItem.liked = true;
        likedItem.fav++;
      },
      dislike(state,action){
        const dislikedItem = state.events.find((event) => event.id === action.payload);
        dislikedItem.liked = false
        dislikedItem.fav--;
      }
    }
  }
)

export const eventActions = eventSlice.actions;

export default eventSlice;