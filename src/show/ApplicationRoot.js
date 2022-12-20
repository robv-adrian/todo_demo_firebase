import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screens from "Screens";
import { navigationRef } from "Navigation";

const Stack = createStackNavigator();

const ApplicationRoot = ({ userSession }) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {userSession === false ? (
          <>
            <Stack.Screen name="Login" component={Screens.Public.Login} />
            <Stack.Screen name="SignUp" component={Screens.Public.SignUp} />
          </>
        ) : (
          <>
            <Stack.Screen name="Todos" component={Screens.Private.Todos} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect((state) => ({
  userSession: state.application.userSession,
}))(ApplicationRoot);
