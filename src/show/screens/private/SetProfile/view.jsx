import React from "react";

import { SafeAreaView, TextInput } from "react-native";

import { Button } from "Components";
import { updateStateWithProps } from "Helpers";

const SetProfile = ({ fullName, updateTransientProps, updateUserProfile }) => {
  return (
    <SafeAreaView>
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
      <Button
        title="Set Profile"
        onPress={updateUserProfile.bind(null, fullName)}
      />
    </SafeAreaView>
  );
};

export default SetProfile;
