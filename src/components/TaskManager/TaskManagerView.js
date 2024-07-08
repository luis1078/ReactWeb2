import styles from '../../stylesheets/TaskManager/TaskManagerView.module.css';
import TaskList from './TaskList';

function TaskManager() {
  return (
    <div className={styles.tasksApp}>
        <div className={styles.mainTasksList}>
          <h1 className={styles.mainTitle}> My tasks </h1>
          <TaskList/>
        </div>
    </div>
  );
}

export default TaskManager;
