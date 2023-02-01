const Course = ({ course }) => {
  console.log(course.id, 'iteration:',course)
  return (
    <div>
      <Header course={course} />
    </div>
  )
}

  const Header = ({ course }) => {
    return (
      <div>
        <h2>{course.name}</h2>
        <Parts course={course} />
        <Totals course={course} />
      </div>
    )
  }

  const Parts = ({ course }) => {
    return (
      <div>
        <ul>
          {course.parts.map(part => 
            <li key={part.id}>{part.name} {part.exercises}</li>
          )}
        </ul>
      </div>
    )
  }

  const Totals = ({ course }) => {
    const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);
    return (
      <div>
        <p>Total of {total} exercises</p>
      </div>
    )
  }

export default Course
