import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Input from "./components/input";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  return (
    <main>
      <Input id="name" label="Your Name" />
      <Input id="age" label=" Your Age" />
    </main>
  );
}

export default App;
