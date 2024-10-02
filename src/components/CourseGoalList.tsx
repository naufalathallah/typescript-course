import { ReactNode } from "react";
import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Belum ada goals</InfoBox>;
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Kebanyakan goals pak
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
