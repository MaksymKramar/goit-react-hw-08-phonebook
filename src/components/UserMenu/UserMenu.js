import React from "react";
import { connect } from "react-redux";
import userAvatar from "./useravatar.png";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
    width: "30px",
    height: "30px",
    filter: "drop-shadow(2px 4px 6px black)",
    backgroundColor: "chartreuse",
    borderRadius: "50%",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: "ivory",
  },
  button: {
    boxShadow: "inset 0px 1px 0px 0px #3985B1",
    backgroundColor: "#216288",
    border: "1px solid #17445E",
    display: "inline-block",
    cursor: "pointer",
    color: "ivory",
    padding: "8px 18px",
    textDecoration: "none",
    font: "12px Arial, Helvetica, sans-serif",
  },
};

const UserMenu = ({ name, onLogout }) => (
  <div style={styles.container}>
    <img src={userAvatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} style={styles.button}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
