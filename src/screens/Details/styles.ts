import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 250px;
  justify-content: flex-end;
  padding: 0 24px 16px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const Contain = styled(RectButton)`
  width: 100%;
  height: 54px;
  padding: 0 16px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXT};

  justify-content: center;
`;


