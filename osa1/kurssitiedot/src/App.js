const Header = (props) => {
  console.log('Header:')  
  console.log(props)
  console.log('====')    
  return (
          <div>
          <h1>{props.course.name}</h1>
          </div>
      )
    }

const Content = (props) => {
  console.log('Content:')  
  console.log(props)
  console.log('====')    
  return (
          <div>
          <Part1 name1={props.course.parts[0].name} exercises1={props.course.parts[0].exercises} />
          <Part2  name2={props.course.parts[1].name} exercises2={props.course.parts[1].exercises} />
          <Part3 name3={props.course.parts[2].name} exercises3={props.course.parts[2].exercises} />
          </div>
      )
    }

const Totals = (props) => {
  console.log('Totals:')  
  console.log(props)
  console.log('====')    
  return (
          <div>
          <p>Number of exercises {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
          </div>
      )
    }    

const Part1 = (props) => {
  console.log('Part1:')  
  console.log(props)
  console.log('====')    
  return (
          <div>
          <p>{props.name1} {props.exercises1}</p>
          </div>
      )
    }

const Part2 = (props) => {
  console.log('Part2:')  
  console.log(props)
  console.log('====')    
  return (
          <div>
          <p>{props.name2} {props.exercises2}</p>
          </div>
      )
    }

const Part3 = (props) => {
  console.log('Part3:')  
  console.log(props)
  console.log('====')    
  return (
          <div>
          <p>{props.name3} {props.exercises3}</p>
          </div>
      )
    }


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Totals course={course} />
      </div>
    )
  }

export default App