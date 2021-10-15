export function getTodos() {
    return {
      type: "GET_TODOS"
    };
  }
  
  export function setTodo(todo) {
    return {
      type: "SET_TODO",
      payload: todo
    };
  }
  
  export function setTodos() {
    return {
      type: "SET_TODOS"
    };
  }
  
  export function deleteTodo(index) {
    return {
      type: "DELETE_TODO",
      payload: index
    };
  }
  
  export function setEditing(index) {
    return {
      type: "SET_EDITING",
      payload: index
    };
  }
  
  export function setTodosEditing() {
    return {
      type: "SET_TODOS_EDITING"
    };
  }
  