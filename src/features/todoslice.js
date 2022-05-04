import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todoList:[]
}

const todoslice = createSlice({
  name: 'todos',
  initialState,
  reducers: {saveToDo:(state,actions)=>
    state.todoList.push(actions.payload)
}
});

export const {saveToDo} = todoslice.actions
export default todoslice.reducer