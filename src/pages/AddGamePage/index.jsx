import React, { useState } from 'react';
import components from '../../components';
import {
  AddGameStyle,
  InputContainer,
  PlatformInputsContainer,
} from './addGamePageStyles';

function AddGamePage() {
  const [gameInfo, setGameInfo] = useState({
    game: {
      title: '',
      releaseDate: '',
      sinopse: '',
      developer: '',
      publisher: '',
      trailer: '',
      category: '',
      metascore: '',
      userscore: '',
      image: '',
      backdrop: '',
      platformCount: 1,
    },
  });

  const [platforms, setPlatforms] = useState({ platform0: '' });

  const {
    Input,
    TextArea,
    DropDown,
    Option,
    Line,
    Button,
  } = components;

  const { game } = gameInfo;

  const handleInputChange = ({ target: { name, value } }) => {
    setGameInfo({
      ...gameInfo,
      game: {
        ...gameInfo.game,
        [name]: value,
      },
    });
  };

  const onAddInputsButtonClick = () => {
    const currentPlatforms = {};
    for (let index = 0; index < +game.platformCount; index += 1) {
      currentPlatforms[`platform${index}`] = '';
    }

    setPlatforms(currentPlatforms);
  };

  return (
    <AddGameStyle>
      <InputContainer>
        <Input
          placeholder="Digite o nome do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="title"
          value={game.title}
          borderRadius="15px"
        />
        <Input
          placeholder="Digite a data de lançamento do jogo no formato dd/mm/aaaa"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="releaseDate"
          value={game.releaseDate}
          borderRadius="15px"
        />
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <TextArea
        margin="15px 0"
        placeholder="Digite a sinopse do jogo"
        width="76%"
        onChange={handleInputChange}
        name="sinopse"
        value={game.sinopse}
        borderRadius="15px"
      />
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a desenvolvedora do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="developer"
          value={game.developer}
          borderRadius="15px"
        />
        <Input
          placeholder="Digite a publicadora do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="publisher"
          value={game.publisher}
          borderRadius="15px"
        />
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a quantidade de plataformas para qual o jogo foi lançado"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          type="number"
          onChange={handleInputChange}
          name="platformCount"
          borderRadius="15px"
          value={game.platformCount}
        />
        <Button
          width="45%"
          borderRadius="15px"
          fontSize="1.3vw"
          backgroundColor="white"
          padding="5px"
          hoverCursor="pointer"
          hoverTransform="scale(1.05, 1.05)"
          transition="0.2s"
          hoverBackgroundColor="#5cff59"
          onClick={onAddInputsButtonClick}
        >
          Adicionar inputs para plataformas
        </Button>
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <PlatformInputsContainer>
        {
          Object.entries(platforms).map((platform) => (
            <Input
              placeholder="Digite a plataforma"
              width="45%"
              margin="15px 0"
              fontSize="1.2vw"
              onChange={handleInputChange}
              name={platform[0]}
              value={platforms[platform[0]]}
              borderRadius="15px"
              key={platform[0]}
            />
          ))
        }
      </PlatformInputsContainer>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a url do trailer do jogo no Youtube"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="trailer"
          value={game.trailer}
          borderRadius="15px"
        />
        <DropDown
          width="45%"
          onChange={handleInputChange}
          name="category"
          value={game.category}
          borderRadius="15px"
        >
          <Option value="test">Test</Option>
          <Option value="test 1">Test 1</Option>
          <Option value="test 2">Test 2</Option>
          <Option value="test 3">Test 3</Option>
        </DropDown>
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a nota 'metascore' do site Metacritic"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="metascore"
          value={game.metascore}
          borderRadius="15px"
        />
        <Input
          placeholder="Digite a nota 'userscore' do site Metacritic"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="userscore"
          value={game.userscore}
          borderRadius="15px"
        />
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a url da imagem do game"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="image"
          value={game.image}
          borderRadius="15px"
        />
        <Input
          placeholder="Digite a url da imagem de backdrop do game"
          width="45%"
          margin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="backdrop"
          value={game.backdrop}
          borderRadius="15px"
        />
      </InputContainer>
    </AddGameStyle>
  );
}

export default AddGamePage;
