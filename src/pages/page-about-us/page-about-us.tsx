import { Accordion, Box, HStack, Text } from '@chakra-ui/react';
import { RhombIcon } from '@/src/assets';
import { AccordionItemExt, AccordionPanelExt, Modal } from '@/src/components';
import { ModalProvider } from '@/src/providers';

export const PageAboutUs = ({ data }: { data: TMockData[] }) => {
  const defaultOpened = data.map((_, i) => i);

  return (
    <Box
      as='main'
      maxW='1920px'
      mx='auto'
      pt={['60px', null, null, '90px', '120px']}
      pb={['30px', null, '50px', null, '60px']}
      px={['14px', null, '30px', '100px', '160px']}
    >
      <HStack gap='10px' mb='10px'>
        <RhombIcon />
        <Text fontSize='14px'>Our services</Text>
      </HStack>

      <ModalProvider>
        <Accordion as='section' allowMultiple defaultIndex={defaultOpened}>
          {data.map((item, i) => (
            <AccordionItemExt key={item.title + i} title={item.title}>
              <AccordionPanelExt data={item} initSlide={i} />
            </AccordionItemExt>
          ))}
        </Accordion>

        <Modal />
      </ModalProvider>
    </Box>
  );
};
