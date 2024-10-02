import "./App.css";
import Button from "./components/Button";
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
      <Input id="name" label="Your Name" type="text" />
      <Input id="age" label=" Your Age" type="number" />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">An Anchor</Button>
      </p>
    </main>
  );
}

export default App;
