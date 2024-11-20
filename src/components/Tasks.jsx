import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTaskDestroy }) {
  const navigate = useNavigate();

  function onShowDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6">
        {tasks.map((task) => (
          <li key={task} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
                task.isComplete && "line-through"
              }`}
            >
              {task.title}
            </button>
            <Button
              onClick={() => onShowDetailsClick(task)}
              className="bg-slate-400 rounded-md p-2 text-white"
            >
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => onTaskDestroy(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
