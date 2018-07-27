export const FETCH_TODO = "FETCH_TODO"
export const FETCH_TODO_BY_ID_SUCCESS = "FETCH_TODO_BY_ID_SUCCESS"
export const CHANGE_DESCRIPTION_TEXT = "CHANGE_DESCRIPTION_TEXT"
export const SAVE_TODO_SUCCESS = "SAVE_TODO_SUCCESS" 
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS" 
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS"
export const ITEM_FETCHING_IN_PROGRESS_INFO = "ITEM_FETCHING_IN_PROGRESS_INFO"

export const fetchTodo = (json) => {
    console.log('json', json._embedded.todo);
    return {
      type: FETCH_TODO,
      payload: json._embedded.todo
    };
  }
  
  export const fetchData = () => {
    return (dispatch) => {
      fetch('http://crud0509.herokuapp.com/todo').then(data =>
        data.json().then(json => {
          dispatch(fetchTodo(json));
        })
      );
    };
  }
  export function fetchTodoByIdSuccess(json){
    return {
      type: FETCH_TODO_BY_ID_SUCCESS,
      payload: {id : json.id, description : json.description}
    };
  }
  export const fetchTodoById = (id) => {
    return (dispatch) => {
      fetch(`http://crud0509.herokuapp.com/todo/${id}`).then(data =>
        data.json().then(json => {
          dispatch(fetchTodoByIdSuccess(json));
        })
      );
    };
  }
  
  export const itemFetchingInProgress = (value) => {
    return {
      type: ITEM_FETCHING_IN_PROGRESS_INFO,
      payload: {value}
    };
  }
  

  export const changeDescriptionText = (description) => {
    // console.log('description', description);
    return {
      type: CHANGE_DESCRIPTION_TEXT,
      payload: {description}
    };
  }

  export const saveTodoSuccess = (push) => {
    push("/");
    return {
      type: SAVE_TODO_SUCCESS
    };
  }
  export const updateTodoSuccess = (push) => {
    push("/");
    return {
      type: UPDATE_TODO_SUCCESS
    };
  }
  
  export const addTodo = (todo, push) => {
    return (dispatch) => {
      fetch('http://crud0509.herokuapp.com/todo',{
        method: 'post',
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      }).then(data =>
        data.json().then(json => {
          dispatch(saveTodoSuccess(push));
        })
      );
    };
  }
  export const updateTodo = (todo, push) => {
    return (dispatch) => {
      fetch(`http://crud0509.herokuapp.com/todo/${todo.id}`,{
        method: 'put',
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      }).then(data =>
        data.json().then(json => {
          dispatch(updateTodoSuccess(push));
        })
      );
    };
  }
  
  export const deleteTodoSuccess = (id) => {
    return {
      type: DELETE_TODO_SUCCESS,
      payload: {id}
    };
  }
  export const deleteTodoHandler = (id) => {
    return (dispatch) => {
      fetch(`http://crud0509.herokuapp.com/todo/${id}`,{
        method: 'delete'
      }).then(data => dispatch(deleteTodoSuccess(id))
      );
    };
  } 