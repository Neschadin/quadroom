'use client';

import { Stack } from '@chakra-ui/react';
import { MainButton } from '@/src/ui';
import { useModalCtx } from '@/src/providers/modal-provider';

export const ButtonsBlock = () => {
  const { openModal } = useModalCtx();

  return (
    <Stack
      mt='auto'
      gap='10px'
      direction={['column', 'column', 'row', 'column']}
    >
      <MainButton>See projects</MainButton>
      <MainButton variant='solid' onClick={openModal}>
        Consult me
      </MainButton>
    </Stack>
  );
};
