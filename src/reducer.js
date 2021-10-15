const INITIAL_STATE = {
    todo: "OK",
    todos: [],
    isEditing: -1
  };
  
  function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_TODOS":
        return {
          ...state,
          todos: ["todo 1", "todo 2"]
        };
  
      case "SET_TODO":
        return {
          ...state,
          todo: action.payload
        };
  
      case "SET_TODOS":
        return {
          ...state,
          todos: [...state.todos, state.todo]
        };
  
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((_, i) => i !== action.payload)
        };
  
      case "SET_EDITING":
        return {
          ...state,
          isEditing: action.payload
        };
  
      case "SET_TODOS_EDITING":
        return {
          ...state,
          todos: state.todos.map((t, i) => {
            if (i === state.isEditing) {
              return state.todo;
            }
            return t;
          })
        };
  
      default:
        return state;
    }
  }
  
  export default reducer;
  