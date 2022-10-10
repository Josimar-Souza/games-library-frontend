/* eslint-disable no-undef */
import React from 'react';
import { findByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';

const emailInputTestId = 'email-input-login';
const passwordInputTestId = 'password-input-login';

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
      const emailInput = await screen.findByTestId(emailInputTestId);

      await act(async () => {
        userEvent.type(emailInput, 'email.email');
      });

      expect(emailInput).toHaveStyle(`
        border: 1px solid red;
        box-shadow: 5px 5px 10px red;
      `);
    });

    it('Verifica se ao digitar um email válido, o input fica verde', async () => {
      const emailInput = await screen.findByTestId(emailInputTestId);

      await act(async () => {
        userEvent(emailInput, 'testemail@gmail.com');
      });

      expect(emailInput).toHaveStyle(`
        border: 1px solid green;
        box-shadow: none;
      `);
    });

    it('Verifica se ao digitar uma senha inválida, o input fica vermelho', async () => {
      const passwordInput = await findByTestId(passwordInputTestId);

      await act(async () => {
        userEvent.type(passwordInput, 'Kfnoiadiodw');
      });

      expect(passwordInput).toHaveStyle(`
        border: 1px solid red;
        box-shadow: 5px 5px 10px red;
      `);
    });

    it('Verifica se ao digitar um senha válida, o input fica verde', async () => {
      const passwordInput = await findByTestId(passwordInputTestId);

      await act(async () => {
        userEvent.type(passwordInput, 'TestePass15!');
      });

      expect(passwordInput).toHaveStyle(`
        border: 1px solid green;
        box-shadow: none;
      `);
    });
  });
});
