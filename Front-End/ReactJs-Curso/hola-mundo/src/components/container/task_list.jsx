import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const Task_list = props => {
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
    
    return (
        <div>
            <div>   
                <h1>Your Tasks: </h1>
            </div>
            {/* TODO aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}



export default Task_list