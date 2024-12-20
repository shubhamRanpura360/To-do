const todokeys = "reactTodo"

export const getLocalStoregeTodoData = () =>{
    const rowTodos = localStorage.getItem(todokeys) 
    if(!rowTodos) return [];
    return JSON.parse(rowTodos)
}     

export const setLocalStoregeTodoData = (task) =>{
   return localStorage.setItem(todokeys, JSON.stringify(task))
}     