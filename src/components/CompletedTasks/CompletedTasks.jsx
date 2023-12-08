import { useContext } from "react";
import { AppContext } from "../../AppContext";
import TaskItem from "../TaskItem/TaskItem";
import Title from "../Title/Title";
import styles from "./CompletedTasks.module.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const CompletedTasks = () => {
  const { taskList } = useContext(AppContext);

  return (
    <div className={styles.master}>
      <DragDropContext>
        <Droppable>
          {( ) => (
    <div className={styles.container}>
      <Title iconName="completed" text="Tarefas concluídas" />

      <ul className={styles.taskList}>
        {taskList.map(
          (task) => task.done && <TaskItem key={task.id} task={task} />
        )}
      </ul>
    </div>

          )}
      </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CompletedTasks;
