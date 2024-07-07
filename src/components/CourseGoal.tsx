import { type PropsWithChildren } from "react";

// style 1
// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// style 2
type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
