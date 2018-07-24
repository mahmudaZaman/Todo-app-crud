import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './list';
import AddTodo from './addTodo';
import EditTodo from './editTodo';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={List}/>
            <Route exact path='/addTodo' component={AddTodo}/>
            <Route exact path='/edit/:id' component={EditTodo}/>
        </Switch>
    </main>
    
)
  
export default Main;