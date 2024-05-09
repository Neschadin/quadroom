import { Stack, Grid, GridItem, HStack, Box, Text } from '@chakra-ui/react';
import { RhombIcon } from '@/src/assets';

export const ContentBlock = ({ data }: { data: TMockData }) => (
  <Stack
    direction={['column', 'column', 'row', 'column']}
    gap='20px'
    lineHeight={['21px', null, '18px', null, '21px']}
  >
    <Text whiteSpace='pre-line' fontSize={['14px', null, '12px', null, '14px']}>
      {data.text}
    </Text>

    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      flexShrink={0}
      py={['20px', null, null, '10px', '40px']}
      px={['30px', null, '40px', '20px', '40px']}
      border='1px'
      borderColor='#333333'
      gap='10px'
    >
      {data.list.map((item) => (
        <GridItem key={item}>
          <HStack gap='8px'>
            <RhombIcon />
            <Box as='span' fontSize={{ base: '12px', lg: '10px', xl: '12px' }}>
              {item}
            </Box>
          </HStack>
        </GridItem>
      ))}
    </Grid>
  </Stack>
);
