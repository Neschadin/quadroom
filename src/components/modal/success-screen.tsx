import { ThumbIcon } from '@/src/assets';
import { Center, Text, VStack } from '@chakra-ui/react';

export const SuccessScreen = ({ message }: { message: string }) => {
  return (
    <Center w='100%' h={{ base: 'auto', md: '448px' }}>
      <VStack gap='40px'>
        <ThumbIcon />

        <Text>{message}</Text>
      </VStack>
    </Center>
  );
};
