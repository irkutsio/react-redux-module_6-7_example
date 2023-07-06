import { getTasks } from "redux/selectors";
import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks)
 

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

// const active = tasks.filter(task => !task.completed)
// const completed = tasks.filter(task => task.completed)
// return (
//   <div>
//     <p className={css.text}>Active: {active.length}</p>
//     <p className={css.text}>Completed: {completed.length}</p>
//   </div>
// );


  return (
    <div>
      <p className={css.text}>Active:  {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
