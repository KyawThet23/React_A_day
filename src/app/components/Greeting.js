export default function Greeting(props) 
{
  let name = "Someone";
  return(
    <div>
      Hello {props.name}
      You are {props.age} years old.
      {/* 
      Expression is expected
      {if(true)
        console.log('Hello Expression')
      } */}
    </div>
  )
}