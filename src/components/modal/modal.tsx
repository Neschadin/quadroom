'use client';

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Center,
} from '@chakra-ui/react';

import { useModalCtx } from '@/src/providers/modal-provider';
import { CloseIcon } from '@/src/assets';
import { CloseButton } from '@/src/ui';
import { ConsultForm } from './consult-form';

export const Modal = () => {
  const { isOpen, closeModal } = useModalCtx();

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={closeModal}
      size={['full', null, 'md', null, 'xl']}
    >
      <ModalOverlay backdropFilter='blur(2px)' bg='rgba(51, 51, 51, 0.9)' />

      <ModalContent
        bg='#1e1e1e'
        borderRadius={0}
        py={['50px', null, '70px', null, '88px']}
        px={['16px', null, '50px', null, '66px']}
      >
        <CloseButton
          position='absolute'
          top={0}
          right={0}
          zIndex={2}
          onClick={closeModal}
        >
          <CloseIcon />
        </CloseButton>

        <Center flexGrow={1}>
          <ConsultForm />
        </Center>
      </ModalContent>
    </ChakraModal>
  );
};
