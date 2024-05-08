'use server';

// submit simulation
export async function submitFormData(
  prevState: ActionState | null,
  data: FormData
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    status: 'success',
    message: 'Thank you! application successfully sent',
  };
}
