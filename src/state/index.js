const state = {
  age: null
}

export const setState = (key, value) => {
  state[key] = value
}

export const getState = (key) => state[key]
