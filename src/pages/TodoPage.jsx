import { Link } from 'react-router-dom'
import Header from '../components/common/Header'
import TodoInput from '../components/todo/TodoInput'
import TodoList from '../components/todo/TodoList'
import '../styles/pages/TodoPage.css'

const TodoPage = () => {
    return (
        <div className="container">
            <div className="todo-page">
                <Header title="To-Do Application" />
                <TodoInput />
                <TodoList />
            </div>
        </div>
    )
}

export default TodoPage