export const submitForm = (formData) => ({
  type: 'SUBMIT_FORM',
  payload: { formData },
  meta: {
    retry: true,
  },
})
