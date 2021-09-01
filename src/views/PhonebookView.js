import Section from "../components/Section/Section";
import Form from "../components/Form/Form";
import Contacts from "../components/Contacts/Contacts";
import Filter from "../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors, contactsOperations } from "../redux/contacts";
import { useEffect } from "react";
import { Div } from "./ViewsStyles/PhonebookView.styles";

export default function PhonebookView() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  // console.log(contacts.length);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <Div>
      <Section title="Phonebook">
        <Form />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      )}
    </Div>
  );
}
