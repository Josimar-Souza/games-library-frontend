import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import components from '../../components';
import GamesAPI from '../../api/gamesAPI';
import { getItem } from '../../helpers/localStorageManager';
import addGameValidation from '../../validations/addGameValidation';
import ErrorCreator from '../../helpers/ErrorCreator';
import {
  AddGameStyle,
  InputContainer,
  PlatformInputsContainer,
} from './addGamePageStyles';

const apiURL = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(apiURL, 15000);

function AddGamePage() {
  const navigate = useNavigate();

  const [gameInfo, setGameInfo] = useState({
    game: {
      title: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      releaseDate: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      sinopse: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      developer: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      publisher: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      trailerURL: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      category: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      metascore: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      userscore: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      image: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      backdrop: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      platformCount: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
      newCategory: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false },
    },
  });

  const [platforms, setPlatforms] = useState({ platform0: { value: '', color: 'rgba(0, 0, 0, 0)', valid: false } });
  const [categories, setCategories] = useState([]);
  const [addGameButton, setAddGameButton] = useState({ disabled: true });
  const [feedbackMessage, setfeedbackMessage] = useState({
    newCategory: {
      show: false,
      value: '',
      color: 'red',
    },
    addGame: {
      show: false,
      value: '',
      color: 'red',
    },
  });

  useEffect(() => {
    const getCategories = async () => {
      const token = getItem('token');
      const categoriesFounded = await gamesAPI.getAllCategories(token);

      if (categoriesFounded.length > 0) {
        setGameInfo({
          ...gameInfo,
          game: {
            ...gameInfo.game,
            category: { value: categoriesFounded[0].category, color: 'rgba(0, 0, 0, 0)', valid: true },
          },
        });
      }

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

  const checkGameInformations = () => {
    let allValidValues = true;
    const { newCategory, ...rest } = game;

    Object.entries(rest).forEach(([, values]) => {
      if (!values.valid) allValidValues = false;
    });

    Object.entries(platforms).forEach(([, values]) => {
      if (!values.valid) allValidValues = false;
    });

    if (allValidValues) {
      setAddGameButton({ ...addGameButton, disabled: false });
    } else {
      setAddGameButton({ ...addGameButton, disabled: true });
    }
  };

  useEffect(() => {
    checkGameInformations();
  }, [game]);

  const handleInputChange = ({ target: { name, value } }) => {
    if (name.includes('platform') && name !== 'platformCount') {
      const validationResults = addGameValidation({ platform: value });

      setPlatforms({
        ...platforms,
        [name]: {
          value,
          color: validationResults[0].color,
          valid: !validationResults[0].error,
        },
      });
    } else {
      const validationResults = addGameValidation({ [name]: value });

      setGameInfo({
        ...gameInfo,
        game: {
          ...gameInfo.game,
          [name]: {
            value,
            color: validationResults[0].color,
            valid: !validationResults[0].error,
          },
        },
      });
    }
  };

  const onAddInputsButtonClick = () => {
    const currentPlatforms = {};
    for (let index = 0; index < +game.platformCount.value; index += 1) {
      currentPlatforms[`platform${index}`] = { value: '', color: 'rgba(0, 0, 0, 0)', valid: false };
    }

    setPlatforms(currentPlatforms);
  };

  const onAddCategoryClick = async () => {
    const token = getItem('token');

    const result = await gamesAPI.addNewCategory({ category: game.newCategory.value }, token);

    if (result instanceof ErrorCreator) {
      setfeedbackMessage({
        ...feedbackMessage,
        newCategory: {
          show: true,
          value: result.message,
          color: 'red',
        },
      });

      setTimeout(() => {
        setfeedbackMessage({
          ...feedbackMessage,
          newCategory: {
            show: false,
            value: '',
            color: 'red',
          },
        });
      }, 3000);
    } else {
      window.location.reload();
    }
  };

  const getFeedBackMessage = (message, color = 'red') => {
    if (feedbackMessage[message].show) {
      return (
        <Paragraph
          fontColor={color}
          fontSize="2vw"
          textAlign="center"
          margin="10px 0"
        >
          { feedbackMessage[message].value }
        </Paragraph>
      );
    }

    return null;
  };

  const onAddGameClick = async () => {
    const {
      title,
      releaseDate,
      backdrop,
      category,
      developer,
      image,
      metascore,
      publisher,
      sinopse,
      trailerURL,
      userscore,
    } = game;

    const platformsList = [];

    Object.values(platforms).forEach(({ value }) => {
      platformsList.push(value);
    });

    const newGame = {
      title: title.value,
      releaseYear: releaseDate.value,
      sinopse: sinopse.value,
      developer: developer.value,
      publisher: publisher.value,
      platforms: platformsList,
      trailerURL: trailerURL.value,
      metacritic: {
        metascore: metascore.value,
        userscore: userscore.value,
      },
      image: image.value,
      backdrop: backdrop.value,
      category: category.value,
    };

    const result = await gamesAPI.addNewGame(newGame, getItem('token'));

    if (result instanceof ErrorCreator) {
      setfeedbackMessage({ ...feedbackMessage, addGame: { show: true, value: result.message, color: 'red' } });
    } else {
      setfeedbackMessage({ ...feedbackMessage, addGame: { show: true, value: 'Game adicionado com sucesso!', color: 'green' } });
    }

    setTimeout(() => {
      setfeedbackMessage({ ...feedbackMessage, addGame: { show: false, value: '', color: 'red' } });
      navigate('/games');
    }, 3000);
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
          value={game.title.value}
          inputBorderRadius="15px"
          labelText="Nome"
          labelFontColor="white"
          id="name"
          inputBorder={`1px solid ${game.title.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.title.color}`}
        />
        <Input
          placeholder="Digite a data de lançamento do jogo no formato dd/mm/aaaa"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="releaseDate"
          value={game.releaseDate.value}
          inputBorderRadius="15px"
          labelText="Data de lançamento"
          labelFontColor="white"
          id="release-date"
          inputBorder={`1px solid ${game.releaseDate.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.releaseDate.color}`}
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
        value={game.sinopse.value}
        textAreaBorderRadius="15px"
        labelText="Sinopse"
        labelFontColor="white"
        containerMargin="1.5rem 0"
        id="sinopse"
        textAreaBorder={`1px solid ${game.sinopse.color}`}
        textAreaBoxShadow={`0 0 8px 4px ${game.sinopse.color}`}
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
          value={game.developer.value}
          inputBorderRadius="15px"
          labelText="Desenvolvedora"
          labelFontColor="white"
          id="developer"
          inputBorder={`1px solid ${game.developer.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.developer.color}`}
        />
        <Input
          placeholder="Digite a publicadora do jogo"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="publisher"
          value={game.publisher.value}
          inputBorderRadius="15px"
          labelText="Publicadora"
          labelFontColor="white"
          id="publisher"
          inputBorder={`1px solid ${game.publisher.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.publisher.color}`}
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
          value={game.platformCount.value}
          labelText="Quantidade de plataformas"
          labelFontColor="white"
          id="platformCount"
          inputBorder={`1px solid ${game.platformCount.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.platformCount.color}`}
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
              value={platforms[platform[0]].value}
              inputBorderRadius="15px"
              key={platform[0]}
              border="none"
              labelText={`Plataforma ${index + 1}`}
              id={`platform-${index}`}
              inputBorder={`1px solid ${platforms[platform[0]].color}`}
              inputBoxShadow={`0 0 8px 4px ${platforms[platform[0]].color}`}
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
          name="trailerURL"
          value={game.trailerURL.value}
          inputBorderRadius="15px"
          labelText="Trailer URL"
          labelFontColor="white"
          id="trailer-url"
          inputBorder={`1px solid ${game.trailerURL.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.trailerURL.color}`}
        />
        <DropDown
          dropdownWidth="80%"
          onChange={handleInputChange}
          name="category"
          value={game.category.value}
          dropdownBorderRadius="15px"
          labelText="Categoria"
          labelFontColor="white"
          dropdownMargin="15px 0"
          dropdownMinHeight="2rem"
          dropdownFontSize="1.5vw"
          id="category"
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
          value={game.metascore.value}
          inputBorderRadius="15px"
          labelText="Metascore"
          labelFontColor="white"
          id="metascore"
          inputBorder={`1px solid ${game.metascore.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.metascore.color}`}
        />
        <Input
          type="number"
          placeholder="Digite a nota 'userscore' do site Metacritic"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="userscore"
          value={game.userscore.value}
          inputBorderRadius="15px"
          labelText="Userscore"
          labelFontColor="white"
          id="userscore"
          inputBorder={`1px solid ${game.userscore.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.userscore.color}`}
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
          value={game.image.value}
          inputBorderRadius="15px"
          labelText="Imagem"
          labelFontColor="white"
          id="image-url"
          inputBorder={`1px solid ${game.image.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.image.color}`}
        />
        <Input
          placeholder="Digite a url da imagem de backdrop do game"
          inputWidth="80%"
          inputMargin="15px 0"
          fontSize="1.2vw"
          onChange={handleInputChange}
          name="backdrop"
          value={game.backdrop.value}
          inputBorderRadius="15px"
          labelText="Imagem de backdrop"
          labelFontColor="white"
          id="backdrop-image-url"
          inputBorder={`1px solid ${game.backdrop.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.backdrop.color}`}
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
        disabled={addGameButton.disabled}
        onClick={onAddGameClick}
      >
        Adicionar jogo
      </Button>
      { getFeedBackMessage('addGame', feedbackMessage.addGame.color) }
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
          value={game.newCategory.value}
          name="newCategory"
          inputBorderRadius="15px"
          labelText="Nova categoria"
          labelFontColor="white"
          id="new-category"
          inputBorder={`1px solid ${game.newCategory.color}`}
          inputBoxShadow={`0 0 8px 4px ${game.newCategory.color}`}
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
          onClick={onAddCategoryClick}
        >
          Adicionar categoria
        </Button>
      </InputContainer>
      {
        getFeedBackMessage('newCategory', feedbackMessage.newCategory.color)
      }
    </AddGameStyle>
  );
}

export default AddGamePage;
