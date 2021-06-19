import styled from "@emotion/native";

export const PageTitleContainer = styled.View`
  margin: 50px 20px;
`;

export const PageTitleStyled = styled.Text`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export const PageSubTitleStyled = styled.Text`
  margin: 20px auto;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: center;
  font-weight: normal;
  max-width: 275px;
`;
