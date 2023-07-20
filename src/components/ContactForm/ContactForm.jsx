import { MainForm, Error } from "./ContactForm.styled";
import { Component } from "react";
import PropTypes from 'prop-types';
import { Formik, Field } from "formik";
import { nanoid } from "nanoid";
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})

const initialValues = {
    name: '',
    number: '',
}

export class ContactForm extends Component {
    handleSubmit = ({ name, number }, {resetForm}) => {
        this.props.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
        ? alert(`${name} is already in contacts`)
        : this.props.onSubmit({ id: nanoid(), name, number });

        resetForm();
    }

    render() {
        return (
               <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.handleSubmit}>
                    <MainForm action="submit" autoComplete="off">
                        <label>Name
                            <Field
                              type="text"
                              name="name"
                              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                              required
                            />
                            <Error name="name"/>
                        </label>

                        <label>Number
                            <Field
                              type="tel"
                              name="number"
                              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                              required
                            />
                            <Error name="number"/>
                        </label>
                    
                        <button type="submit">Add contact</button>
                    </MainForm> 
               </Formik> 
        )
    }

}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}