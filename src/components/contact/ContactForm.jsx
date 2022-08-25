
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { notActions } from '../../state/notification-slice';
import Notification from '../Notification';

const ContactForm = () => {
  const notification = useSelector(state => state.notify.notification);
  const dispatch = useDispatch();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zjqtd7e', 'template_qesn2ug', form.current, 'NFtahAYpZfi6NRCS0')
      .then((result) => {
          dispatch(notActions.showNotification({
            isEmail: true,
            open: false,
            message: 'email sent successfully',
            type:"success"
          }))
      }, (error) => {
        dispatch(notActions.showNotification({
          isEmail: true,
          open: false,
          message: 'sending failed check your internet',
          type:"error"
        }))
      });
      e.target.reset()
  };



  return (
    <div className="contact-form">
      <div className="contact-top">
      
        <h1>send us a message</h1>
        <p>
        Ullam ac urna eu felis dapibus. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor:
        </p>
        {notification.isEmail && <Notification type={notification.type} message={notification.message}/>}
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-top">
          <input type="text" name="user_name" placeholder="your name" required/>
          <input type="email" name="user_email" placeholder="your E-email" required/>
        </div>
        <div className="form-bottom">
          <input type="text" name="user_subject" placeholder="Subject" required/>
          <textarea  name="message" placeholder="Message" rows="10" required></textarea>
          <button className="form-btn">send a message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
