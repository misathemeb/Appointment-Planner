import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);


 const addContact = (name,phone,email) =>{
  setContacts((prevContacts)=>{
      const contact = {
          name : name,
          phone : phone,
          email : email

      };
      return [...prevContacts,contact];
  });
  
}
const addAppointment = (title, contact, date, time) =>{
setAppointments((prevAppointments)=>{
    const appointment = {
        title : title,
        contact : contact,
        date : date,
        time  : time

    };
    return [...prevAppointments, appointment];
});

};

const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage addContact={addContact} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage addAppointment={addAppointment} appointments={appointments} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
