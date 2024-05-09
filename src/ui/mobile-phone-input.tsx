'use client';

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
import { UseFormRegister } from 'react-hook-form';

type TProps = {
  register: UseFormRegister<FormValues>;
  isInvalid: boolean;
};

export const MobilePhoneInput = ({ register, isInvalid }: TProps) => {
  const { inputValue, handlePhoneValueChange, country } = usePhoneInput({
    defaultCountry: 'ua',
    countries: defaultCountries,
  });

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
        {...register('mobile', { required: true })}
        type='tel'
        h={{ base: '50px', xl: '60px' }}
        borderColor='#333333'
        variant='flushed'
        isInvalid={isInvalid}
        value={inputValue}
        onChange={handlePhoneValueChange}
      />

      <InputRightElement w='fit-content' h='100%' fontSize='18px'>
        *
      </InputRightElement>
    </InputGroup>
  );
};
