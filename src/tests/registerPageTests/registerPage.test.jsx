/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { usersAPI } from '../../pages/RegisterPage';

describe('Testes da página de registro', () => {
  describe('Verifica a existência dos elementos', () => {
    beforeEach(() => {
      renderWithRouter(<pages.RegisterPage />);
    });

    it('Verifica se existe um título escrito "Registre-se"', async () => {
      const pageTitle = await screen.findByRole('heading', { name: 'Registre-se' });

      expect(pageTitle).toBeInTheDocument();
    });

    it('Verifica se existe um input para username', async () => {
      const usernameInput = await screen.findByPlaceholderText('Digite seu username');

      expect(usernameInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para email', async () => {
      const emailInput = await screen.findByPlaceholderText('Digite seu email');

      expect(emailInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para senha', async () => {
      const passwordInput = await screen.findByPlaceholderText('Digite sua senha');

      expect(passwordInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para confirmar a senha', async () => {
      const passwordConfirmationInput = await screen.findByPlaceholderText('Confirme sua senha');

      expect(passwordConfirmationInput).toBeInTheDocument();
    });

    it('Verifica se existe um botão para se registrar', async () => {
      const registerButton = await screen.findByRole('button', { name: 'Registrar' });

      expect(registerButton).toBeInTheDocument();
    });
  });

  describe('Verifica o comportamento da página', () => {
    beforeEach(() => {
      renderWithRouter(<pages.RegisterPage />);
    });

    it('Verifica se ao digitar um username inválido, o input fica com estilos vermelhos', async () => {
      const usernameInput = await screen.findByPlaceholderText('Digite seu username');

      userEvent.type(usernameInput, 'Io');

      expect(usernameInput).toHaveStyle(`
        border: 1px solid red;
        box-shadow: 0 0 10px red;
      `);
    });

    it('Verifica se ao digitar um username válido, o input fica com estilos verdes', async () => {
      const usernameInput = await screen.findByPlaceholderText('Digite seu username');

      userEvent.type(usernameInput, 'Iorns');

      expect(usernameInput).toHaveStyle(`
        border: 1px solid green;
        box-shadow: 0 0 10px green;
      `);
    });

    it('Verifica se ao digitar um email inválido, o input fica com estilos vermelhos', async () => {
      const emailInput = await screen.findByPlaceholderText('Digite seu email');

      userEvent.type(emailInput, 'email.com');

      expect(emailInput).toHaveStyle(`
        border: 1px solid red;
        box-shadow: 0 0 10px red;
      `);
    });

    it('Verifica se ao digitar um email válido, o input fica com estilos verdes', async () => {
      const emailInput = await screen.findByPlaceholderText('Digite seu email');

      userEvent.type(emailInput, 'emailtest@gmail.com');

      expect(emailInput).toHaveStyle(`
        border: 1px solid green;
        box-shadow: 0 0 10px green;
      `);
    });

    it('Verifica se ao digitar uma senha inválida, o input fica com estilos vermelhos', async () => {
      const passwordInput = await screen.findByPlaceholderText('Digite sua senha');

      userEvent.type(passwordInput, 'Lkjdnfje12');

      expect(passwordInput).toHaveStyle(`
        border: 1px solid red;
        box-shadow: 0 0 10px red;
      `);
    });

    it('Verifica se ao digitar uma senha válida, o input fica com estilos verdes', async () => {
      const passwordInput = await screen.findByPlaceholderText('Digite sua senha');

      userEvent.type(passwordInput, 'Lkgjhte13!');

      expect(passwordInput).toHaveStyle(`
        border: 1px solid green;
        box-shadow: 0 0 10px green;
      `);
    });

    it('Verifica se com a senha de confirmação errada, o input fica com estilos vermelhos', async () => {
      const passwordInput = await screen.findByPlaceholderText('Digite sua senha');
      const passwordConfirmationInput = await screen.findByPlaceholderText('Confirme sua senha');

      userEvent.type(passwordInput, 'Senha1!');
      userEvent.type(passwordConfirmationInput, 'Senha2!');

      expect(passwordConfirmationInput).toHaveStyle(`
        border: 1px solid red;
        box-shadow: 0 0 10px red;
      `);
    });

    it('Verifica se com a senha de confirmação certa, o input fica com estilos verdes', async () => {
      const passwordInput = await screen.findByPlaceholderText('Digite sua senha');
      const passwordConfirmationInput = await screen.findByPlaceholderText('Confirme sua senha');

      userEvent.type(passwordInput, 'Senha1!');
      userEvent.type(passwordConfirmationInput, 'Senha1!');

      expect(passwordConfirmationInput).toHaveStyle(`
        border: 1px solid green;
        box-shadow: 0 0 10px green;
      `);
    });

    it('Verifica se ao clicar no botão "Registrar" com valores inválidos, aparece a mensagem "Valores inválidos"', async () => {
      const registerButton = await screen.findByRole('button', { name: 'Registrar' });

      jest.spyOn(usersAPI, 'register').mockResolvedValue('Valores inválidos');

      userEvent.click(registerButton);

      const feedbackMessage = await screen.findByRole('paragraph', { name: 'Valores inválidos!' });

      expect(feedbackMessage).toBeInTheDocument();
    });

    it('Verifica se ao clicar no botão "Registrar" com valores válidos, aparece a mensagem "Usuário registrado com sucesso"', async () => {
      const registerButton = await screen.findByRole('button', { name: 'Registrar' });

      jest.spyOn(usersAPI, 'register').mockResolvedValue('Valores inválidos');

      userEvent.click(registerButton);

      const feedbackMessage = await screen.findByRole('paragraph', { name: 'Usuário registrado com sucesso!' });
      expect(feedbackMessage).toBeInTheDocument();
    });
  });
});
