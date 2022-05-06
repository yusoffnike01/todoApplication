import { useState,useEffect } from 'react'
import './App.css'
import {Heading} from '@chakra-ui/react'
import {VStack, IconButton, useColorMode } from '@chakra-ui/react'
import {FaSun, FaMoon} from 'react-icons/fa'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  const initialTodo= [
    {
      id: 1,
      body: 'get asdasd'
    }
    ,{
      id: 2,
      body: 'get butter'
    }
  ]

  const [todos, setTodos]= useState( () => JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  function todoDelete(id){
    const newTodos = todos.filter((todo)=>{
      return todo.id!==id;
    });
    setTodos(newTodos)
  }

  function addTodo(todo)
  {
    setTodos([...todos, todo]);

  }
  
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton 
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound="true" 
        size="lg" 
        alignSelf="flex-end"
        onClick={toggleColorMode}
        />
   <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r,pink.500, pink.300,blue.500)" bgClip="text">Todo Application</Heading>
  <TodoList todos={todos} todoDelete={todoDelete}/>
 <AddTodo addTodo={addTodo}/>
   </VStack>

  )
}

export default App
