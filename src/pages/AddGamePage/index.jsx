import React, { useState, useEffect } from 'react';
import components from '../../components';
import GamesAPI from '../../api/gamesAPI';
import { getItem } from '../../helpers/localStorageManager';
import {
  AddGameStyle,
  InputContainer,
  PlatformInputsContainer,
} from './addGamePageStyles';

const apiURL = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(apiURL, 15000);

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
      platformCount: '',
    },
  });

  const [platforms, setPlatforms] = useState({ platform0: '' });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const token = getItem('token');
      const categoriesFounded = await gamesAPI.getAllCategories(token);

      setCategories(categoriesFounded);
    };

    getCategories();
  }, []);

  const {
    Input,
    TextArea,
    DropDown,
    Option,
    Line,
    Button,
    Title,
    Paragraph,
  } = components;

  const { game } = gameInfo;

  const handleInputChange = ({ target: { name, value } }) => {
    if (name.includes('platform') && name !== 'platformCount') {
      setPlatforms({ ...platforms, [name]: value });
    } else {
      setGameInfo({
        ...gameInfo,
        game: {
          ...gameInfo.game,
          [name]: value,
        },
      });
    }
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
      <Title
        fontColor="white"
        textAlign="center"
        fontSize="4vw"
      >
        Adicione um novo jogo
      </Title>
      <InputContainer>
        <Input
          placeholder="Digite o nome do jogo"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="title"
          value={game.title}
          inputBorderRadius="15px"
          labelText="Nome"
          labelFontColor="white"
          id="name"
        />
        <Input
          placeholder="Digite a data de lançamento do jogo no formato dd/mm/aaaa"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="releaseDate"
          value={game.releaseDate}
          inputBorderRadius="15px"
          labelText="Data de lançamento"
          labelFontColor="white"
          id="release-date"
        />
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <TextArea
        textAreaMargin="15px 0"
        placeholder="Digite a sinopse do jogo"
        textAreaWidth="80%"
        onChange={handleInputChange}
        name="sinopse"
        value={game.sinopse}
        textAreaBorderRadius="15px"
        labelText="Sinopse"
        labelFontColor="white"
        containerMargin="1.5rem 0"
      />
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a desenvolvedora do jogo"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="developer"
          value={game.developer}
          inputBorderRadius="15px"
          labelText="Desenvolvedora"
          labelFontColor="white"
          id="developer"
        />
        <Input
          placeholder="Digite a publicadora do jogo"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="publisher"
          value={game.publisher}
          inputBorderRadius="15px"
          labelText="Publicadora"
          labelFontColor="white"
          id="publisher"
        />
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a quantidade de plataformas para qual o jogo foi lançado"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          type="number"
          onChange={handleInputChange}
          name="platformCount"
          inputBorderRadius="15px"
          value={game.platformCount}
          labelText="Quantidade de plataformas"
          labelFontColor="white"
          id="platformCount"
        />
        <Button
          width="35%"
          borderRadius="15px"
          fontSize="1.5vw"
          fontColor="white"
          backgroundColor="#22cc16"
          padding="5px"
          hoverCursor="pointer"
          hoverTransform="scale(1.05, 1.05)"
          transition="0.2s"
          hoverBackgroundColor="#199610"
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
          Object.entries(platforms).map((platform, index) => (
            <Input
              placeholder="Digite a plataforma"
              inputWidth="80%"
              inputMargin="15px 0"
              fontSize="1.2vw"
              onChange={handleInputChange}
              name={platform[0]}
              value={platforms[platform[0]]}
              inputBorderRadius="15px"
              key={platform[0]}
              border="none"
              labelText={`Plataforma ${index + 1}`}
              id={`platform-${index}`}
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
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="trailer"
          value={game.trailer}
          inputBorderRadius="15px"
          labelText="Trailer URL"
          labelFontColor="white"
          id="trailer-url"
        />
        <DropDown
          dropdownWidth="80%"
          onChange={handleInputChange}
          name="category"
          value={game.category}
          dropdownBorderRadius="15px"
          labelText="Categoria"
          labelFontColor="white"
          dropdownMargin="15px 0"
          dropdownMinHeight="2rem"
          dropdownFontSize="1.5vw"
        >
          {
            categories.map(({ category, _id }, index) => (
              <Option
                value={category}
                key={_id}
                testId={`category-option-${index}`}
              >
                {category}
              </Option>
            ))
          }
        </DropDown>
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          type="number"
          placeholder="Digite a nota 'metascore' do site Metacritic"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="metascore"
          value={game.metascore}
          inputBorderRadius="15px"
          labelText="Metascore"
          labelFontColor="white"
          id="metascore"
        />
        <Input
          type="number"
          placeholder="Digite a nota 'userscore' do site Metacritic"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="userscore"
          value={game.userscore}
          inputBorderRadius="15px"
          labelText="Userscore"
          labelFontColor="white"
          id="userscore"
        />
      </InputContainer>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a url da imagem do game"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="image"
          value={game.image}
          inputBorderRadius="15px"
          labelText="Imagem"
          labelFontColor="white"
          id="image-url"
        />
        <Input
          placeholder="Digite a url da imagem de backdrop do game"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="backdrop"
          value={game.backdrop}
          inputBorderRadius="15px"
          labelText="Imagem de backdrop"
          labelFontColor="white"
          id="backdrop-image-url"
        />
      </InputContainer>
      <Button
        width="25%"
        borderRadius="15px"
        fontSize="2vw"
        fontColor="white"
        backgroundColor="#22cc16"
        padding="5px"
        hoverCursor="pointer"
        hoverTransform="scale(1.05, 1.05)"
        transition="0.2s"
        hoverBackgroundColor="#199610"
      >
        Adicionar jogo
      </Button>
      <Paragraph
        fontColor="white"
        textAlign="center"
        fontSize="2vw"
        width="80%"
        margin="15px 0"
        testId="add-category-message"
      >
        Não achou a categoria que deseja? Adicione-a no formulário abaixo!
      </Paragraph>
      <Line
        width="76%"
        height="3px"
      />
      <InputContainer>
        <Input
          placeholder="Digite a nova categoria"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="backdrop"
          value={game.backdrop}
          inputBorderRadius="15px"
          labelText="Nova categoria"
          labelFontColor="white"
          id="new-category"
        />
        <Button
          width="35%"
          borderRadius="15px"
          fontSize="2vw"
          fontColor="white"
          backgroundColor="#22cc16"
          padding="5px"
          hoverCursor="pointer"
          hoverTransform="scale(1.05, 1.05)"
          transition="0.2s"
          hoverBackgroundColor="#199610"
        >
          Adicionar categoria
        </Button>
      </InputContainer>
    </AddGameStyle>
  );
}

export default AddGamePage;
