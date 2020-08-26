import styled from 'styled-components/native';
import colors from '../../styles/colors';

import { Dimensions } from "react-native";

const width = Math.floor(Dimensions.get('window').width - 11);

export const Container = styled.View` 
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  
  background: ${colors.tag};
  border-radius: 16px;
`;

export const OnlineStatus = styled.View`
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: 0;
  right: 0;

  border-radius: 10px;
  border: 2px solid ${colors.primary};
  background: ${colors.green};
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
