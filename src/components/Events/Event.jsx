
import React from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { eventActions } from "../../state/eventSlice";

const Event = ({ event }) => {
  const dispatch = useDispatch();
  const { title, image, desc, id, link,fav,liked } = event;
  return (
    <div className="event">
      <img className="event-image" src={image} />
      <h1>{title}</h1>
      <p>{desc}</p>
      <div className="fav">
        <p>
          {" "}
          {liked ? (
            <MdOutlineFavorite
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => dispatch(eventActions.dislike(id))}
            />
          ) : (
            <MdFavoriteBorder style={{ cursor: "pointer" }} 
            onClick={() => dispatch(eventActions.like(id))}
            />
          )}{" "}
          {fav}
        </p>
        <a href={link}>Read more</a>
      </div>
    </div>
  );
};

export default Event;
