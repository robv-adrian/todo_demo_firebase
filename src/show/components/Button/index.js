import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "react-native";

import styles from "./style";

const Button = ({ onPress, title, disabled, variant }) => {
  const variants = {
    loginButton: styles.loginButton,
    signUpButton: styles.signUpButton,
    link: styles.link,
    delete: styles.deleteButton,
  };

  return (
    <Pressable onPress={onPress} disabled={disabled} style={variants[variant]}>
      <Text style={variant === "link" ? styles.link : styles.Text}>
        {title}
      </Text>
    </Pressable>
  );
};

Button.defaultProps = {
  disabled: false,
  onPress: undefined,
  title: "",
  variant: "loginButton",
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
