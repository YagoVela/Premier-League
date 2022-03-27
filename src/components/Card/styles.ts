import styled from 'styled-components/native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { RectButton } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  align-items: center;

  width: 280px;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -50px;
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;

  margin-top: ${RFPercentage(5)}px;
  padding: 0 20px 0 20px;
  text-align: center;
`;

export const Foundation = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 14px;

  margin-top: 16px;
`;

export const OptionButton = styled(RectButton)`
  margin-top: 10px;
`;

export const Contain = styled(RectButton)`
  align-items: center;

  width: 280px;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin: 0 10px;
  border-radius: 10px;
`;

