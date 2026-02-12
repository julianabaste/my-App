
import "./CourseGoal.css";

function CourseGoal(props) {
  return (
    <div className="course-goal">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default CourseGoal;

