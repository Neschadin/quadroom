'use client';

import { ReactNode } from 'react';
import { AccordionItem, AccordionButton, Box } from '@chakra-ui/react';
import { ArrowIcon } from '@/src/assets';

type TProps = {
  title: string;
  children: ReactNode;
};

export const AccordionItemExt = ({ title, children }: TProps) => (
  <AccordionItem as='article'>
    {({ isExpanded }) => (
      <Box pt={['20px', null, '26px']} pb={isExpanded ? '40px' : 0}>
        <h2>
          <AccordionButton p={0} gap='20px' mb={['16px', null, '30px']}>
            <Box
              as='span'
              flex='1'
              fontSize='clamp(32px, 5vw, 60px)'
              lineHeight={['38.4px', null, '49.2px', null, '72px']}
              fontWeight={500}
              textAlign='left'
              color='#f5f5f5'
            >
              {title}
            </Box>

            <Box
              transition='transform 0.3s ease-in-out'
              transform={isExpanded ? 'rotate(0deg)' : 'rotate(180deg)'}
            >
              <ArrowIcon />
            </Box>
          </AccordionButton>
        </h2>

        {children}
      </Box>
    )}
  </AccordionItem>
);
