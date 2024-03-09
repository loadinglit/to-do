import { Heading, Box, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {

  const [todos,setTodos] = useState(()=> JSON.parse(localStorage.getItem('todoList')) || []);

  useEffect(() => {
    localStorage.setItem('todoList',JSON.stringify(todos));
  },[todos])

  function AddTodofun(todo){
    setTodos([...todos,todo]);
  }

  function deleteTodo(id){

    const newTodos = todos.filter((todo) => {
        return todo.id !==id;
    })

    setTodos(newTodos)

  }

  const {colorMode,toggleColorMode} = useColorMode();

  return (
    <VStack p="4">
      <IconButton icon={colorMode === 'light' ? <FaSun/> : <FaMoon/>} isRound='true' size='lg' onClick={toggleColorMode} alignSelf='flex-end'/>
      <Box>
        <Heading>React Todo App</Heading>

         <TodoList deleteTodo={deleteTodo}  todos={todos}/>
         <AddTodo addTodo={AddTodofun}/>
      </Box>
    </VStack>
  );
}

export default App;
