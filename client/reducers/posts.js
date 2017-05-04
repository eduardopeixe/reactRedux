// a reducer tales in two things

// 1. the action (info about what happened)

// 2. copy of current state

// all reducers run all the time for every single one

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('increment likes')
      const i = action.index
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+i)
      ]

    default:
    //console.log('reducer function default')
    return state
  }
}

export default posts
