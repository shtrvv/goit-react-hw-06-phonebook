import { useDispatch, useSelector } from "react-redux";
import { List, Item, Contact, Number, Button } from "./ContactList.styled";
import { removeContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);

  const filteredList = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeContact(id));
  }

  return (
      <List>
      {filteredList.map(({id, name, number}) => {
        return (
          <Item key={id}>
            <Contact>{name}: <Number>{number}</Number></Contact>
            <Button type="button" onClick={() => handleDelete(id)}>Delete</Button>
          </Item>
            )
          })}
      </List > 
  )
}

export default ContactList