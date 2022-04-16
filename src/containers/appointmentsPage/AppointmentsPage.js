import React, { useState } from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment}) => {

  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [currentContact, setContact] = useState('');

  console.log(contacts);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */ 
  
  // call state var to clear data upon submission
    addAppointment(title, currentContact, date, time)
    console.log(title, currentContact, date, time)
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        setTitle={setTitle}
        contacts={contacts}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        currentContact={currentContact}
        setContact={setContact}
       
        handleSubmit={handleSubmit}
         />
       
      </section>
      <hr />
      
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
