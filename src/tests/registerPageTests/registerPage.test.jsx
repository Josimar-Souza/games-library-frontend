/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
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
});
