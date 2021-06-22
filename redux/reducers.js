const initialState = {
  formData: null,
}

export const formReducer = (state = initialState, action) => {
  if (action.type === 'SUBMIT_FORM') {
    return Object.assign({}, state, {
      formData: action.payload.formData,
    })
  }
  return state
}
