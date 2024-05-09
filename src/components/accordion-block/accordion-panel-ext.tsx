import { AccordionPanel, Stack, VStack } from '@chakra-ui/react';
import { Slider } from '../slider/slider';
import { ContentBlock } from './content-block';
import { ButtonsBlock } from './buttons-block';

type TProps = { data: TMockData; initSlide: number };

export const AccordionPanelExt = ({ data, initSlide }: TProps) => {
  return (
    <AccordionPanel p={0}>
      <Stack gap='40px' direction={{ base: 'column', lg: 'row' }}>
        <Slider initSlide={initSlide} />

        <VStack
          alignItems='stretch'
          gap={['20px', null, '40px']}
          flexShrink={1}
          flexBasis={{ lg: '508px' }}
        >
          <ContentBlock data={data} />

          <ButtonsBlock />
        </VStack>
      </Stack>
    </AccordionPanel>
  );
};
