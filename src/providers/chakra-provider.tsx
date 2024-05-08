'use client';

import { ReactNode } from 'react';
import {
  CSSReset,
  ChakraProvider as Provider,
  extendTheme,
} from '@chakra-ui/react';

const breakpoints = {
  base: '0px',
  sm: '375px',
  md: '768px',
  lg: '1440px',
  xl: '1920px',
  '2xl': '1920px',
};

const theme = extendTheme({ breakpoints });

export const ChakraProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider disableGlobalStyle theme={theme}>
      <CSSReset />
      {children}
    </Provider>
  );
};
