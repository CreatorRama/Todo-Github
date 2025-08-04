
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import '../../styles/components/TodoComponents.css'

const TodoList = () => {
  const tasks = useSelector(state => state.todos.tasks)
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TodoList