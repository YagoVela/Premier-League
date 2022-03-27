import React from 'react';

import { Container, Image, Title, Stadium, HistoryText } from './styles';
import { ImageProps } from 'react-native';

interface Iteam {
  id: number;
  name: string;
  logo: ImageProps;
  history: string;
  stadium: string;
  location: string;
}

interface CardDetailsProps {
  team: Iteam
}

const CardDetails: React.FC<CardDetailsProps> = ({ team }) => {
  
  return (
    <>
      <Container
        key={team.id}
        animation="zoomIn"
        duration={2000}
      >
        <Image
          source={team.logo}
          resizeMode="contain"
        />

        <Title>{team.name}</Title>
        <Stadium>{team.stadium}</Stadium>
        <HistoryText>{team.history}</HistoryText>
      </Container>
    </>
  );
}

export default CardDetails