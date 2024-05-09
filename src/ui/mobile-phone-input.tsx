'use client';

import { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import {
  defaultCountries,
  FlagImage,
  usePhoneInput,
} from 'react-international-phone';

type TProps = {
  register: UseFormRegister<FormValues>;
  isInvalid: boolean;
};

export const MobilePhoneInput = ({ register, isInvalid }: TProps) => {
  const { inputValue, handlePhoneValueChange, country } = usePhoneInput({
    defaultCountry: 'ua',
    countries: defaultCountries,
  });

  const buildedRegister = register('mobile', { required: true });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    buildedRegister.onChange(e);
    handlePhoneValueChange(e);
  };

  return (
    <InputGroup>
      <InputLeftElement w='fit-content' h='100%'>
        <FlagImage
          width='14px'
          iso2={country.iso2}
          style={{ display: 'flex' }}
        />
      </InputLeftElement>

      <Input
        {...buildedRegister}
        maxLength={19}
        type='tel'
        h={{ base: '50px', xl: '60px' }}
        borderColor='#333333'
        variant='flushed'
        isInvalid={isInvalid}
        value={inputValue}
        onChange={handleInput}
      />

      <InputRightElement w='fit-content' h='100%' fontSize='18px'>
        *
      </InputRightElement>
    </InputGroup>
  );
};
