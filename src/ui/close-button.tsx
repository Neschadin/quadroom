import { Box, ButtonProps, Center } from '@chakra-ui/react';
import { CloseIcon } from '../assets';

export const CloseButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Box
      as='button'
      h={['50px', null, '40px', null, '50px']}
      w={['50px', null, '40px', null, '50px']}
      transition='color 0.3s'
      color='#f5f5f5'
      _before={{
        content: '" "',
        position: 'absolute',
        h: '100%',
        w: '100%',
        left: 0,
        top: 0,
        zIndex: -1,
        bg: '#f5f5f5',
        transition: 'box-shadow 0.3s, transform 0.3s',
        boxShadow: 'inset 0 0 0 35px #e94834',
        transform: 'scale3d(0.9, 0.9, 1)',
      }}
      _hover={{
        color: '#1e1e1e',
        _before: {
          boxShadow: 'inset 0 0 0 2px #e94834',
          transform: 'scale3d(1, 1, 1)',
        },
      }}
      {...rest}
    >
      <Center>
        <CloseIcon />
      </Center>
    </Box>
  );
};
