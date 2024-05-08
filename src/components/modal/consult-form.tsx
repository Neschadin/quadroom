'use client';

import { VStack, Text, Box, Input, Textarea } from '@chakra-ui/react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { submitFormData } from './api/form-action';
import { formSchema } from './utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { MobilePhoneInput } from './components/mobile-phone-input';
import { MainButton } from '@/src/ui';
import { SuccessScreen } from './utils/success-screen';
import { useTransition } from 'react';

export const ConsultForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const [state, formAction] = useFormState<ActionState, FormData>(
    submitFormData,
    null
  );

  const [pending, startTransaction] = useTransition();
  const onSubmit = (formData: FormData) =>
    startTransaction(() => formAction(formData));

  const renderForm = (
    <form action={onSubmit}>
      <VStack gap={['16px', null, '20px', null, '30px']} alignItems='stretch'>
        <Text fontSize='22px' fontWeight={500} textTransform='uppercase'>
          {`Do you want to consult about your project?`}
        </Text>

        <VStack
          gap={['10px', null, '16px', null, '20px']}
          alignItems='stretch'
          textColor='#f5f5f5'
        >
          <Input
            h={{ base: '50px', xl: '60px' }}
            borderColor='#333333'
            variant='flushed'
            placeholder='Name:'
            {...register('name')}
            isInvalid={!!errors.name}
          />

          <MobilePhoneInput register={register} isInvalid={!!errors.mobile} />

          <Input
            type='email'
            h={{ base: '50px', xl: '60px' }}
            borderColor='#333333'
            variant='flushed'
            placeholder='Email:'
            {...register('email')}
            isInvalid={!!errors.email}
          />

          <Textarea
            variant='flushed'
            borderColor='#333333'
            placeholder='Comment:'
            resize='vertical'
            {...register('comment')}
            isInvalid={!!errors.comment}
          />
        </VStack>

        <Box>
          <MainButton
            variant='solid'
            mb='10px'
            type='submit'
            disabled={pending}
          >
            Submit
          </MainButton>
          <Text fontSize='10px'>{`By clicking "Submit" you agree to the processing of personal data`}</Text>
        </Box>
      </VStack>
    </form>
  );

  return state?.status === 'success' ? (
    <SuccessScreen message={state.message} />
  ) : (
    renderForm
  );
};
