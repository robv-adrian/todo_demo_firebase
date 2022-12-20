import React from "react";
import {
  SafeAreaView,
  TextInput,
  Image,
  View,
  Pressable,
  Text,
} from "react-native";

import { Button } from "Components";

import { updateStateWithProps } from "Helpers";

const SignUp = ({
  updateTransientProps,
  email,
  fullName,
  password,
  signUp,
  updateUserProps,
  isPremium,
}) => {
  return (
    <SafeAreaView>
      <View style={{ display: "flex", alignItems: "center", marginTop: 50 }}>
        <Image
          source={require("./../../../assets/no_profile_pic.jpg")}
          style={{ width: 110, height: 110, borderRadius: 50 }}
        />
        <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => {}}>
            <Text style={{ fontSize: 20 }}>Upload</Text>
          </Pressable>
        </View>
      </View>
      <TextInput
        placeholder="Full Name"
        style={{ fontSize: 30, marginTop: 30, textAlign: "center" }}
        autoCapitalize={"none"}
        value={fullName || ""}
        onChangeText={updateStateWithProps.bind(
          null,
          updateTransientProps,
          "fullName"
        )}
      />
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
        style={{ fontSize: 30, marginTop: 30, textAlign: "center" }}
        autoCapitalize={"none"}
        value={password || ""}
        onChangeText={updateStateWithProps.bind(
          null,
          updateTransientProps,
          "password"
        )}
      />
      <Button
        title="SignUp"
        variant={"signUpButton"}
        onPress={signUp.bind(null, email, password, fullName)}
      />
      <Button
        title={`Premium ${isPremium ? "ON" : "OFF"}`}
        variant={"signUpButton"}
        onPress={updateStateWithProps.bind(
          null,
          updateUserProps,
          "isPremium",
          !isPremium
        )}
      />
    </SafeAreaView>
  );
};

export default SignUp;
