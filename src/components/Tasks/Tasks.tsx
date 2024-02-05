import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";
// import { title } from "process";


export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks} = useContext(TasksContext)

  //Função disparada quando for adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Título da tarefa está muito curto");
      return;
    }

    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);

    localStorage.setItem(`tasks`, JSON.stringify(newTasks));

    setTaskTitle("");
  }

  function handleToggleTaskStatus(taskId:number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    });

    setTasks(newTasks)
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label>Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} onChange={() => {
                handleToggleTaskStatus(task.id)
              }}  />
              <label htmlFor={`task-${task.id}`} className={task.done ? styles.done : ''}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
