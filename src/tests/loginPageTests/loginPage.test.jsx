/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';

const emailTestId = 'email-input-login';

describe('Testes da página de login', () => {
  describe('Verifica a existência dos elementos', () => {
    beforeEach(() => {
      renderWithRouter(<pages.LoginPage />);
    });

    it('Verifica se a logo aparece na página', async () => {
      const logo = await screen.findByTestId('login-logo');

      expect(logo).toBeInTheDocument();
    });

    it('Verifica se existe um input para o email', async () => {
      const emailInput = await screen.findByTestId(emailTestId);

      expect(emailInput).toBeInTheDocument();
    });

    it('Verifia se existe um input para senha', async () => {
      const passwordInput = await screen.findByTestId('password-input-login');

      expect(passwordInput).toBeInTheDocument();
    });

    it('Verifica se existe um botão escrito "Logar"', async () => {
      const signInButton = await screen.findByRole('button', { name: 'Logar' });

      expect(signInButton).toBeInTheDocument();
    });

    it('Verifica se existe um botão escrito "Registrar"', async () => {
      const registerButton = await screen.findByRole('button', { name: 'Registrar' });

      expect(registerButton).toBeInTheDocument();
    });
  });

  describe('Verifica o comportamento da página', () => {
    beforeEach(() => {
      renderWithRouter(<pages.LoginPage />);
    });

    it('Verifica se ao digitar um email inválido, o input fica vermelho', async () => {
      const emailInput = await screen.findByTestId(emailTestId);

      await act(async () => {
        userEvent.type(emailInput, 'email.email');
      });

      expect(emailInput).toHaveStyle('border: 1px solid red');
    });

    it('Verifica se ao digitar um email válido, o input fica verde', async () => {
      const emailInput = await screen.findByTestId(emailTestId);

      await act(async () => {
        userEvent(emailInput, 'testemail@gmail.com');
      });

      expect(emailInput).toHaveStyle('border: 1px solid green');
    });
  });
});
