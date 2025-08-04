import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  tasks:localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload
      }
      state.tasks.push(newTask)
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  }
})

export const { addTask, deleteTask } = todoSlice.actions
export default todoSlice.reducer