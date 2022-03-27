import React, {useEffect, useState} from 'react';

import { useRoute } from '@react-navigation/native';
import { ImageProps, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { Container, Header, Content, Contain } from './styles';
import CardDetails from '../../components/CardDetails';
import coverImg from '../../assets/cover.png';

interface Iteam {
  id: number;
  name: string;
  logo: ImageProps;
  history: string;
  stadium: string;
  location: string;
}

interface routeParams {
  idTeam: number;
  team: Iteam;
}

const Details = () => {
  const route = useRoute();
  const [team, setTeam] = useState<Iteam>({} as Iteam); 
  const navigation = useNavigation();

  useEffect(() => {
    async function getRouteParams() {
      const { team } = route.params as routeParams;

      setTeam(team);
    }
    getRouteParams();
  }, [route.params]);

  return (
    <>
    <Container>
      <Header source={coverImg}>
        <Contain
          key={team.id}
          onPress={() => navigation.navigate('Home')} 
        >
          <Text style={{color: "#a5a5a5", textAlign:"center"}}>Retornar para a Listagem</Text>
        </Contain>
      </Header>
    
      <Content>
        <CardDetails team={team}/>
      </Content>
   
    </Container>
    </>
  );
}

export default Details;