import React, {useState} from 'react';

import { Container, Header, Content } from './styles';
import { ImageProps } from 'react-native';

import { teams } from '../../service/fakeApi';

import { Input } from '../../components/Input';
import Card from '../../components/Card';

import coverImg from '../../assets/cover.png';

interface Iteam {
  id: number;
  name: string;
  logo: ImageProps;
  history: string;
  stadium: string;
  location: string;
}

export function Home() {
  const [filtedTeam, setfiltedTeam] = useState<Iteam[]>(teams);
  
  const filterTeam = (search: string) => {
    if (search === '') {
      setfiltedTeam([...teams]);
    } else {
      const newArrayTeam = teams.filter((teams) =>
      teams.name.toUpperCase().includes(search.toUpperCase()),
      );
      setfiltedTeam([...newArrayTeam]);
    }
  };

  return (
    <Container>
      <Header source={coverImg}>
        <Input placeholder="Pesquisar..." onChangeText={(value) => {
            filterTeam(value);
          }} />
      </Header>

      <Content>
        <Card teams={filtedTeam}/>
      </Content>
   
    </Container>
  );
}