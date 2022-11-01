import React from 'react';
import components from '../../components';
import {
  AddGameStyle,
  InputContainer,
} from './addGamePageStyles';

function AddGamePage() {
  const {
    Input,
    TextArea,
    DropDown,
  } = components;
  return (
    <AddGameStyle>
      <InputContainer>
        <Input
          placeholder="Digite o nome do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
        />
        <Input
          placeholder="Digite a data de lançamento do jogo no formato dd/mm/aaaa"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
        />
      </InputContainer>
      <TextArea
        margin="15px 0"
        placeholder="Digite a sinopse do jogo"
        width="76%"
      />
      <InputContainer>
        <Input
          placeholder="Digite a desenvolvedora do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
        />
        <Input
          placeholder="Digite a publicadora do jogo"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
        />
      </InputContainer>
      <Input
        placeholder="Digite a quantidade de plataformas para qual o jogo foi lançado"
        width="45%"
        margin="15px 0"
        fontSize="1.5vw"
        type="number"
      />
      <InputContainer>
        <Input
          placeholder="Digite a url do trailer do jogo no Youtube"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          type="number"
        />
        <DropDown
          width="45%"
        >
          <option value="test">Test</option>
          <option value="test">Test 1</option>
          <option value="test">Test 2</option>
          <option value="test">Test 3</option>
        </DropDown>
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Digite a nota 'metascore' do site Metacritic"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          type="number"
        />
        <Input
          placeholder="Digite a nota 'userscore' do site Metacritic"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          type="number"
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Digite a url da imagem do game"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          type="number"
        />
        <Input
          placeholder="Digite a url da imagem de backdrop do game"
          width="45%"
          margin="15px 0"
          fontSize="1.5vw"
          type="number"
        />
      </InputContainer>
    </AddGameStyle>
  );
}

export default AddGamePage;
