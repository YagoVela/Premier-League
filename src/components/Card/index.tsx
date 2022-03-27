import React, { useState } from 'react';
import { ScrollView, ImageProps } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, Image, Title, Foundation, Contain } from './styles';

interface Iteam {
  id: number;
  name: string;
  logo: ImageProps;
  history: string;
  stadium: string;
  location: string;
}

interface CardProps {
  teams: Iteam[];
}

const Card: React.FC<CardProps> = ({ teams }) => {
  const navigation = useNavigation();

  return (
    <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 32, paddingTop: 90, paddingLeft: 16 }}
        >
            {teams.map((team) => (
              <Container
                key={team.id}
                animation="rubberBand"
                duration={2000}
                >
                <Contain
                  key={team.id}
                  onPress={() => navigation.navigate('Details', {
                    team: team,
                  })}>
                    
                  <Image
                    source={team.logo}
                    resizeMode="contain"
                    animation="pulse"
                    delay={100}
                    duration={500}
                    direction="alternate"
                    iterationCount="infinite"
                  />

                  <Title>{team.name}</Title>
                  <Foundation>{team.location}</Foundation>
                </Contain>
              </Container>
            ))}
            
        </ScrollView>
    
    </>
  );
}

export default Card;