import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactSlice";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import { Container, TextP, Input } from "./Filter.style";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Container>
      <TextP>Find contacts by name</TextP>
      <Input
        placeholder="Search"
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </Container>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
