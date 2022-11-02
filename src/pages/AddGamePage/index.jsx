import React, { useState } from 'react';
import components from '../../components';
import {
  AddGameStyle,
  InputContainer,
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
    },
  });

  const {
    Input,
    TextArea,
    DropDown,
    Option,
    Line,
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

  return (
    <AddGameStyle>
      <InputContainer>
        <Input
          placeholder="Digite o nome do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="title"
          value={game.title}
        />
        <Input
          placeholder="Digite a data de lançamento do jogo no formato dd/mm/aaaa"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="releaseDate"
          value={game.releaseDate}
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
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="developer"
          value={game.developer}
        />
        <Input
          placeholder="Digite a publicadora do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="publisher"
          value={game.publisher}
        />
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <Input
        placeholder="Digite a quantidade de plataformas para qual o jogo foi lançado"
        width="45%"
        margin="15px 0"
        fontSize="1.5vw"
        type="number"
        onChange={handleInputChange}
        name="platformCount"
      />
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a url do trailer do jogo no Youtube"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="trailer"
          value={game.trailer}
        />
        <DropDown
          width="45%"
          onChange={handleInputChange}
          name="category"
          value={game.category}
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
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="metascore"
          value={game.metascore}
        />
        <Input
          placeholder="Digite a nota 'userscore' do site Metacritic"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="userscore"
          value={game.userscore}
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
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="image"
          value={game.image}
        />
        <Input
          placeholder="Digite a url da imagem de backdrop do game"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          onChange={handleInputChange}
          name="backdrop"
          value={game.backdrop}
        />
      </InputContainer>
    </AddGameStyle>
  );
}

export default AddGamePage;
