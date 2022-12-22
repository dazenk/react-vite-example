import { createContext, useEffect, useState } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([])

    const createTask = (task) => {
        setTasks([...tasks, {            
            title: task.title,
            id: Date.now(),
            description: task.description
        }])
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return(
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext