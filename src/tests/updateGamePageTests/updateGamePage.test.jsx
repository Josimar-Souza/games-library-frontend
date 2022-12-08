/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import pages from '../../pages';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testes da página de atualização', () => {
  describe('Verifica a existência dos elementos', () => {
    beforeEach(() => {
      renderWithRouter(<pages.UpdatePage />);
    });

    it('Uma título escrito "Atualize o jogo"', async () => {
      const pageTitle = await screen.findByRole('heading', { name: 'Atualize o jogo' });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
