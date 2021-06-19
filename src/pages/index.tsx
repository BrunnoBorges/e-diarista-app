import React from "react";
import { View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";

import Button from "ui/components/inputs/button/button";
import { RootStackParamList } from "ui/router/router";

type NavigationProp = StackNavigationProp<RootStackParamList, "Index">;

interface IndexProps {
  navigation: NavigationProp;
}

const Index: React.FC<IndexProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        mode={"contained"}
        onPress={() => navigation.navigate("EncontrarDiarista")}
      >
        Encontrar Diarista
      </Button>
    </View>
  );
};

export default Index;
