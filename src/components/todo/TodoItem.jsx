import { useDispatch } from 'react-redux'
import { deleteTask } from '../../store/slices/todoSlice'
import '../../styles/components/TodoComponents.css'

const TodoItem = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <div className="task-card">
      <span className="task-text">{task.text}</span>
      <button 
        onClick={() => {
          dispatch(deleteTask(task.id))
          const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
          const updatedTasks = tasks.filter(t => t.id !== task.id)
          localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        }}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem