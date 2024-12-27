import {createStore} from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
    task: [],
    isLoading: false,
};
const taskReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_TASK:
           return {
            ...state,
            task: [...state.task, action.payload]
           };

           case DELETE_TASK:
            const updatedTask = state.task.filter( (curTask , index) => {
              return index !== action.payload;
            })
            return {
             ...state, 
             task: updatedTask,
            };
    
        default:
          return state;
    }
};

//  create the redux store using the reduer

export const store = createStore(taskReducer)
console.log(store);


console.log("initial State:",store.getState());

 export const addTask = (data) => {
    return {type: ADD_TASK, payload: data};
 }

 export const deleteTask = (id) => {
    return {type: DELETE_TASK, payload: id};
 }

store.dispatch(addTask("Buyy code $10"));
console.log("updated State:" , store.getState());

store.dispatch({type: DELETE_TASK, payload: 1});
console.log("deleted State:" , store.getState());

