import React from 'react';
import LoadingSection from './loadingStyles';
import Title from '../Title';

function Loading() {
  return (
    <LoadingSection>
      <Title
        fontColor="white"
        textAlign="center"
      >
        Carregando...
      </Title>
    </LoadingSection>
  );
}

export default Loading;
