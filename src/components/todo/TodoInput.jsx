import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/todoSlice'
import '../../styles/components/TodoComponents.css'

const TodoInput = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()

  const handleSaveTask = () => {
    if (inputText.trim()) {
        localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks') || '[]'), { id: Date.now(), text: inputText.trim() }]))
      dispatch(addTask(inputText.trim()))
      setInputText('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveTask()
    }
  }

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyPress}
        className="task-input"
      />
      <button onClick={handleSaveTask} className="save-btn">
        Save Task
      </button>
    </div>
  )
}

export default TodoInput