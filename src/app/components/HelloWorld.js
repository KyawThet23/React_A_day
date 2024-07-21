export function AnotherChild()
{
  return (<div>
    Another Child
  </div>)
}

export default function HelloWorld()
{
  return(
    <div>
      <h1>Hello World Components</h1>
      <p>Hi How are you?</p>
      <AnotherChild />
    </div>
  )
}