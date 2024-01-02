import { Form, Label, Input, Button } from "./ContactForm.styled";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
    const dispatch = useDispatch();
    const { contacts } = useSelector((state) => state.contacts);

    const [data, setData] = useState({
        name: '',
        number: '',
    })

    const handleChange = ({target:{name, value}}) => {
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isExist = contacts.find(({name}) => name.toLowerCase() === data.name.toLowerCase());
        if (isExist) {
            return alert(`${data.name} is already exist`);
        }

        dispatch(addContact(data));

        setData({
            name: '',
            number: '',
        });
    }

    return (
      <Form onSubmit={handleSubmit}>
        <Label>Name
            <Input type="text" name="name" value={data.name} onChange={handleChange} required />
        </Label>
        <Label>Number
            <Input type="tel" name="number" value={data.number} onChange={handleChange} required />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    )
}

export default ContactForm