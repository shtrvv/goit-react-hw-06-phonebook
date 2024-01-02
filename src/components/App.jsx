import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import { Header } from "./App.styled"
import { useSelector } from "react-redux"
import Notification from "./Notification/Notification"

const App = () => {
  const { contacts } = useSelector((state) => state.contacts);

  return (
    <>
      <Header>Phonebook</Header>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter />
      {contacts?.length ?
      <ContactList />
        :
      <Notification message={'There are no contacts'} />
      }
    </>
  )
}

export default App
