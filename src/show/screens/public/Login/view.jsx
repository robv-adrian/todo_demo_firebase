import React from "react";
import { SafeAreaView, TextInput } from "react-native";

import { Button } from "Components";
import NavigationService from "Navigation";
import { updateStateWithProps } from "Helpers";

const navigate = NavigationService.navigate;

const Login = ({ email, password, updateTransientProps, login }) => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        style={{ fontSize: 30, marginTop: 30, textAlign: "center" }}
        autoCapitalize={"none"}
        value={email || ""}
        onChangeText={updateStateWithProps.bind(
          null,
          updateTransientProps,
          "email"
        )}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize={"none"}
        value={password || ""}
        style={{ fontSize: 30, marginTop: 30, textAlign: "center" }}
        onChangeText={updateStateWithProps.bind(
          null,
          updateTransientProps,
          "password"
        )}
      />
      <Button title="Login" onPress={login.bind(null, email, password)} />
      <Button
        title="No account ?"
        variant="link"
        onPress={navigate.bind(null, { routeName: "SignUp" })}
      />
    </SafeAreaView>
  );
};

export default Login;
