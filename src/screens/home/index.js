import React from 'react'
import {
  Container, 
  Text, 
  ContainerRecords, 
  ContainerInfos,
  ProfileContainer,
  SearchPlayer,
  Button,
  SelectContainer,
  SelectTierContainer
} from './styles'

import maps from './vanillaMaps'

const Home = () => {
  const [records, setRecords] = React.useState([]);

  const [totalMapas, setTotalMapas] = React.useState(0);
  const [searchResult, setSearchResult] = React.useState(false);
  const [steamUserName, setSteamUserName] = React.useState('');
  const [steamId, setSteamId] = React.useState('');
  const [limit] = React.useState(1000);
  const [isYourMaps, setIsYourMaps] = React.useState(true);
  const [selectTierMap, setSelectTierMap] = React.useState(1);

  const fetchSteamUser = async() => {
    const request = await fetch(`https://kztimerglobal.com/api/v2.0/players/steamid/${steamId}`);
    const result = await request.json();
    setSteamUserName(result[0].name)
  }

  const fetchRecords = async() => {
    const request = await fetch(`https://kztimerglobal.com/api/v2.0/records/top?steam_id=${steamId}&tickrate=128&stage=0&modes_list_string=kz_vanilla&has_teleports=true&limit=${limit}`)
    const result = await request.json();
    setRecords(result)
  }

  const handleSearch = (e) => {
    if(steamId === ''){
      setSearchResult(false)
      return false
    }
    fetchSteamUser();
    fetchRecords();
    setSearchResult(true)
  }

  const MapsList = () => {
    return(
      <ContainerRecords>
        {
          maps.map((item) => {
            if(item.name !== records[0].map_name){
              if(item.tier === selectTierMap){
                return(
                  <ContainerInfos>
                    <Text>{item.name}</Text>
                    <Text>Tier: {item.tier}</Text>
                  </ContainerInfos>
                );
              }
            }
            return <></>
          })
        }
      </ContainerRecords>
    );
  }

  const RecordsList = () => {
    return(
      <ContainerRecords>
        {
          records.map((item, index) => {
            setTotalMapas(index+1)
            return(
              <ContainerInfos>
                <Text>{item.map_name}</Text>
                <Text>{item.time}s - {item.points} pts</Text>
              </ContainerInfos>
            );
          })
        }
      </ContainerRecords>
    );
  }

  const Select = () => {
    if(isYourMaps){
      return <RecordsList />
    }
    return <MapsList/>
  }
  return(
    <Container>
      <ProfileContainer>
        <Text size='30px'>KZ Vanilla</Text>
        <Button onClick={() => window.open('https://steamid.xyz')}>
          <Text size='15px'>Encontrar meu Steam Id</Text>
        </Button>
        <SearchPlayer placeholder='Steam ID' value={steamId} onChange={e => setSteamId(e.target.value)}/>
        <Button onClick={() => handleSearch()}>
          <Text>Pesquisar Player</Text>
        </Button>
        <SelectContainer>
          <Button onClick={() => setIsYourMaps(true)}>
            <Text>Mapas Feitos</Text>
          </Button>
          <Button marginLeft='20px' onClick={() => setIsYourMaps(false)}>
            <Text>Mapas Faltando</Text>
          </Button>
        </SelectContainer>
        {
          searchResult && 
          (
            <>
              <Text>Selecione o tier do mapa:</Text>
              <SelectTierContainer>
                <Button onClick={() => setSelectTierMap(1)}>
                  <Text>1</Text>
                </Button>
                <Button marginLeft='10px' onClick={() => setSelectTierMap(2)}>
                  <Text>2</Text>
                </Button>
                <Button marginLeft='10px' onClick={() => setSelectTierMap(3)}>
                  <Text>3</Text>
                </Button>
                <Button marginLeft='10px' onClick={() => setSelectTierMap(4)}>
                  <Text>4</Text>
                </Button>
                <Button marginLeft='10px' onClick={() => setSelectTierMap(5)}>
                  <Text>5</Text>
                </Button>
              </SelectTierContainer>
              <Text><strong>{searchResult && steamUserName}</strong> zerou {totalMapas} mapas.</Text>
              <Select/>
            </>
          )
        }
      </ProfileContainer>

    </Container>
  );
}

export default Home;