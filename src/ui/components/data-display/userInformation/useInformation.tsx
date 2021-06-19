import React from "react";
import { Avatar } from "react-native-paper";

import {
  InformationContainer,
  UseInformationContainer,
  UserDescription,
  UserName,
  RatingStyled,
} from "./useinformation.style";

export interface UseInformationProps {
  picture: string;
  name: string;
  rating: any;
  description?: string;
  darker?: boolean;
}

const UseInformation: React.FC<UseInformationProps> = (props) => {
  return (
    <UseInformationContainer darker={Boolean(props.darker)}>
      <Avatar.Image source={{ uri: props.picture }} />
      <InformationContainer>
        <UserName>{props.name}</UserName>
        <RatingStyled defaultRating={props.rating} />
        <UserDescription>{props.description}</UserDescription>
      </InformationContainer>
    </UseInformationContainer>
  );
};

export default UseInformation;
