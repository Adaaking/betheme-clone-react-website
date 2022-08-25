import { useDispatch, useSelector } from "react-redux";
import { notActions } from "../../state/notification-slice";
import Notification from "../Notification";
import Order from "./Order";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.menu.orders);
  const cart = useSelector((state) => state.menu);
  const notification = useSelector((state) => state.notify.notification);
  
  let total = 0;
  orders.forEach((item) => {
    total += item.totalPrice;
  });

  const sendRequest = async () => {
    try {
      dispatch(
        notActions.showNotification({
          open: true,
          isEmail: false,
          message: "sending request",
          type: "warning",
        })
      );
      const response = await fetch(
        "https://betheme-clone-default-rtdb.firebaseio.com/coffee.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      dispatch(
        notActions.showNotification({
          open: true,
          isEmail: false,
          message: "your order successfully submitted",
          type: "success",
        })
      );
    } catch (error) {
      dispatch(
        notActions.showNotification({
          open: true,
          isEmail: false,
          message: "sending failed check your internet",
          type: "error",
        })
      );
    }
  };

  return (
    <div className="your-orders">
      {notification.open && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <h1>your orders</h1>
      <div className="underline"></div>
      {orders.map((order, indx) => (
        <Order order={order} key={indx} />
      ))}
      <div className="submit">
        <h3>totalPrice : ${total}</h3>
        <button className="submit-btn" onClick={sendRequest}>
          submit order
        </button>
      </div>
    </div>
  );
};

export default Orders;
