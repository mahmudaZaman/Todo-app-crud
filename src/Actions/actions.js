export const FETCH_TODO = "FETCH_TODO"

export const fetchTodo = (json) => {
    return {
      type: "FETCH_TODO",
      payload: json
    };
  }
  
  export const fetchData = () => {
    return (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/users').then(data =>
        data.json().then(json => {
          dispatch(fetchTodo(json));
        })
      );
    };
  }
  