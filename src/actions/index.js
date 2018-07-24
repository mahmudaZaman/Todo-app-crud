export const FETCH_TODO = "FETCH_TODO"
export const CHANGE_DESCRIPTION_TEXT = "CHANGE_DESCRIPTION_TEXT"
export const SAVE_TODO_SUCCESS = "SAVE_TODO_SUCCESS"

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

  export const changeDescriptionText = (description) => {
    console.log('description', description);
    return {
      type: CHANGE_DESCRIPTION_TEXT,
      payload: {description}
    };
  }

  export const saveTodoSuccess = (push) => {
    // console.log('description', description);
    push("/");
    return {
      type: SAVE_TODO_SUCCESS
    };
  }

  export const addTodo = (todo, push) => {
    return (dispatch) => {
      fetch('http://crud0509.herokuapp.com/todo',{
        method: 'post',
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      }).then(data =>
        data.json().then(json => {
          dispatch(saveTodoSuccess(push));
        })
      );
    };
  }