import styled from 'styled-components/native';
import { RFPercentage } from "react-native-responsive-fontsize";
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  align-items: center;

  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -32px;
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;

  padding: 0 20px 0 20px;
  text-align: center;
`;

export const Foundation = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 14px;

  margin-top: 0px;
`;

export const Stadium = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 14px;

  margin-top: 4px;
`;

export const HistoryText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 14px;
  text-align: center;
  padding: 0 5px 0 5px;

  margin-top: 16px;
`;

