import { type PropsWithChildren } from "react";

// style 1
// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// style 2
type CourseGoalProps = PropsWithChildren<{ id: number; title: string; onDelete: (id: number) => void }>;

export default function CourseGoal({ id, title, children, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
