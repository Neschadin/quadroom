import { Box, ButtonProps, Center } from '@chakra-ui/react';

export const MainButton = ({ children, variant, ...rest }: ButtonProps) => {
  const isSolid = variant === 'solid';
  const translate3d = `translate3d(0, ${isSolid ? '-100%' : '100%'}, 0)`;

  const commonPseudoStyles = {
    content: '" "',
    position: 'absolute',
    h: '100%',
    w: '100%',
    bottom: isSolid ? 0 : '100%',
    left: 0,
    zIndex: -1,
    transition: 'transform 0.3s cubic-bezier(0.75, 0, 0.125, 1)',
  };

  return (
    <Box
      as='button'
      position='relative'
      h={{ base: '40px', xl: '50px' }}
      w='100%'
      lineHeight='16.8px'
      transition='all 0.2s'
      p='10px'
      fontSize={{ base: '12px', xl: '14px' }}
      fontWeight={500}
      bg='#f5f5f5'
      color={isSolid ? '#f5f5f5' : '#1e1e1e'}
      overflow='hidden'
      zIndex={1}
      _active={{ transform: 'scale(0.98)' }}
      _before={{
        ...commonPseudoStyles,
        bg: rest.disabled ? 'inherit' : '#ec5f4d',
        transitionDelay: isSolid ? '0.2s' : 0,
      }}
      _after={{
        ...commonPseudoStyles,
        bg: rest.disabled ? 'inherit' : '#e94834',
        transitionDelay: isSolid ? 0 : '0.2s',
      }}
      _hover={{
        color: isSolid ? '#1e1e1e' : '#f5f5f5',
        _before: { transform: translate3d },
        _after: { transform: translate3d },
      }}
      _disabled={{
        transform: 'none',
        bg: isSolid ? 'DimGray' : 'DarkGray',
        color: isSolid ? 'DarkGray' : 'DimGray',
      }}
      {...rest}
    >
      <Center>{children}</Center>
    </Box>
  );
};
