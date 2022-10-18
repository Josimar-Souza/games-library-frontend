/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';

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

    it('Verifica se existe um botão para se registrar', async () => {
      const registerButton = await screen.findByRole('button', { name: 'Registrar' });

      expect(registerButton).toBeInTheDocument();
    });
  });

  describe('Verifica o comportamento da página', () => {
    it('Verifica se ao digitar um username inválido, o input fica com características vermelhas', async () => {
      const usernameInput = await screen.findByPlaceholderText('Digite seu username');

      userEvent.type(usernameInput, '');

      expect(usernameInput).toHaveStyle(`
        border: 1px solid red;
        box-shadow: 0 0 10 red;
      `);
    });

    it('Verifica se ao digitar um username válido, o input fica com características verdes', async () => {
      const usernameInput = await screen.findByPlaceholderText('Digite seu username');

      userEvent.type(usernameInput, 'Josimar');

      expect(usernameInput).toHaveStyle(`
        border: 1px solid green;
        box-shadow: 0 0 10 green;
      `);
    });
  });
});
