/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { usersAPI } from '../../pages/LoginPage';

const emailInputTestId = 'email-input-login';
const passwordInputTestId = 'password-input-login';
const feedbackTestId = 'feedback-login';
const loginLogoTestId = 'login-logo';
const loginParagraph = 'login-paragraph';

describe('Testes da página de login', () => {
  describe('Verifica a existência dos elementos', () => {
    beforeEach(() => {
      renderWithRouter(<pages.LoginPage />);
    });

    it('Verifica se a logo aparece na página', async () => {
      const logo = await screen.findByTestId(loginLogoTestId);

      expect(logo).toBeInTheDocument();
    });

    it('Verifica se existe um título escrito "Bem vindo ao Games Library!"', async () => {
      const title = await screen.findByRole('heading', { name: 'Bem vindo ao Games Library!' });

      expect(title).toBeInTheDocument();
    });

    it('Verifica se existe um parágrafo escrito "Por favor, faça login ou registre-se!"', async () => {
      const paragraph = await screen.findByTestId(loginParagraph);

      expect(paragraph).toBeInTheDocument();
      expect(paragraph.textContent).toBe('Por favor, faça login ou registre-se!');
    });

    it('Verifica se existe um input para o email', async () => {
      const emailInput = await screen.findByTestId(emailInputTestId);

      expect(emailInput).toBeInTheDocument();
    });

    it('Verifia se existe um input para senha', async () => {
      const passwordInput = await screen.findByTestId(passwordInputTestId);

      expect(passwordInput).toBeInTheDocument();
    });

    it('Verifica se existe um botão escrito "Logar"', async () => {
      const signInButton = await screen.findByRole('button', { name: 'Logar' });

      expect(signInButton).toBeInTheDocument();
    });

    it('Verifica se existe um botão escrito "Registre-se"', async () => {
      const registerButton = await screen.findByRole('button', { name: 'Registre-se' });

      expect(registerButton).toBeInTheDocument();
    });
  });

  describe('Verifica o comportamento da página', () => {
    beforeEach(() => {
      renderWithRouter(<pages.LoginPage />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Verifica se ao clicar no botão "Logar" com valores inválidos, a mensagem "Email ou senha inválidos" aparece', async () => {
      const signInButton = await screen.findByRole('button', { name: 'Logar' });

      jest.spyOn(usersAPI, 'login').mockResolvedValue({ message: 'Email ou senha inválidos!', error: true });

      await act(async () => {
        userEvent.click(signInButton);
      });

      const feedbackMessage = await screen.findByTestId(feedbackTestId);

      expect(feedbackMessage.textContent).toBe('Email ou senha inválidos!');
    });

    it('Verifica se ao clicar no botão "Logar" com valores válidos, a página é redirecionada', async () => {
      const signInButton = await screen.findByRole('button', { name: 'Logar' });

      jest.spyOn(usersAPI, 'login').mockResolvedValue({ token: 'aksdawdniasdnAWDIAUSDAWd1564' });

      await act(async () => {
        userEvent.click(signInButton);
      });

      const { pathname } = window.location;

      expect(pathname).toBe('/games');
    });

    it('Verifica se ao clicar no botão "Registre-se", a página é redirecionada', async () => {
      const registerButton = await screen.findByRole('button', { name: 'Registre-se' });

      userEvent.click(registerButton);

      const { pathname } = window.location;

      expect(pathname).toBe('/register');
    });
  });
});
