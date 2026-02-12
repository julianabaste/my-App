import CourseGoal from "./CourseGoal";

function App() {
  return (
    <div>
      <h1>TIME TO PRACTICE</h1>
      <h3>One course, many goals!</h3>

      <CourseGoal title="LEARN REACT" description="In-depth" />
      <CourseGoal title="MASTER NODE.JS" description="Backend basice" />
      <CourseGoal title="PRACTICE CSS" description="Design polished layouts" />
    </div>
  );
}

export default App;