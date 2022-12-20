import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";

import { Button } from "Components";
import { updateStateWithProps } from "Helpers";
import { ScrollView } from "react-native-gesture-handler";

const Todos = ({
  logout,
  updateTransientProps,
  todo,
  todoUpdated,
  addTodo,
  todos,
  deleteTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState(false);

  const onPressHandler = (docId, data) => {
    updateTodo(docId, data);
    setEdit(!edit);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontSize: 30 }}>Please add here your todos</Text>
        <View style={{ display: "flex", margin: 40 }}>
          <TextInput
            placeholder="Add Todo..."
            value={todo || ""}
            style={{ fontSize: 20, marginTop: 30, textAlign: "center" }}
            onChangeText={updateStateWithProps.bind(
              null,
              updateTransientProps,
              "todo"
            )}
          />
          <Button title="+" onPress={addTodo.bind(null, todo)} />
        </View>
        {todos != undefined
          ? todos.map((element, index) => {
              return (
                <View key={index}>
                  <TextInput
                    style={{ fontSize: 30 }}
                    value={!edit && element.todo}
                    placeholder={edit ? element.todo : null}
                    editable={edit}
                    onChangeText={updateStateWithProps.bind(
                      null,
                      updateTransientProps,
                      "todoUpdated"
                    )}
                  />
                  <Button
                    variant="delete"
                    title="Delete"
                    onPress={deleteTodo.bind(null, element.id)}
                  />
                  {!edit && (
                    <Button title="Edit" onPress={setEdit.bind(null, !edit)} />
                  )}
                  {edit && (
                    <Button
                      title="Confirm"
                      onPress={onPressHandler.bind(
                        null,
                        element.id,
                        todoUpdated
                      )}
                    />
                  )}
                </View>
              );
            })
          : null}
        <Button title="Logout" variant="link" onPress={logout} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Todos;
