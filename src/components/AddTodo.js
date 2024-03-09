import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";

function AddTodo({addTodo}) {
   
   const [task,setTask] = useState('');
   const toast = useToast();

   function handleSubmit(e){

      e.preventDefault();

      //adding Task
      if(!task){
          
         toast({
            title:'No Task',
            status:'error',
            duration:2000,
            isClosable:true
          });


         return;
      }

      const todo = {
         id:nanoid(),
         body:task
      };
      
      addTodo(todo);

      setTask("");

   }

   return (
   <>

      <form onSubmit={handleSubmit}>
         <HStack  mt="8">
            <Input onChange={(e) => setTask(e.target.value)} value={task} variation='filled' placeholder="Ex: Start Learning React" />
            <Button type="submit" colorScheme="cyan" px="8">Add Todo</Button>
         </HStack>
      </form>

   </>);


}

export default AddTodo;