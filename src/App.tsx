import "./App.css";
import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Heya children h1</h1>
      </Header>
      <CourseGoal title="Tes React">
        <p>Ini children</p>
      </CourseGoal>
    </main>
  );
}

export default App;
