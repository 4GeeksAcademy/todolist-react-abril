
import React, {useState} from "react";
 import {Trash2} from "lucide-react";
 
 const TodoList = () => {
 
     const [todos, setTodos]= useState([]);
     const [inputValue, setInputValue]= useState("");
 
     const handleKeyPress = (e) => {
         if (e.key === "Enter" && inputValue.trim() !== ""){
             setTodos([...todos, inputValue.trim()]);
             setInputValue("");
         }
     };
     const deleteTodo = (index) => {
         const newTodos = todos.filter ((_, i) => i !== index);
         setTodos(newTodos);
     };
 
 
 return(
     <div className="todo-list">
         <h1>TodoList</h1>
         <input
         type="text"
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
         onKeyPress={handleKeyPress}
         placeholder="¿What's needs to be done?"
         className="empty-messege"
         
         />
         <div>
             {todos.length === 0 ?(
                 <p> There are not more todos. Add more todos. </p>
             ):(
                 todos.map((todo, index) => (
                 <div
                 key={index}
                 className="todo-item"
                 >
                 <span>{todo}</span>
             <button
                 onClick={() => deleteTodo (index)}
                 className="delete-button"
                 >
              <Trash2 size={14}/>
             </button>
                 </div>
             ))
             )}
 
 
         </div>
     </div>
 
 )
 }
 
 export default TodoList;