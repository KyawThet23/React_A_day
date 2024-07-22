import Greeting from "./Greeting";

function AnotherContainer(props)
{
  return(
    <div>
      {props.children[0]}
    </div>
  )
}


export default function Container(props) 
{
  let {message} = props;
  return(
  <div>
    Container
    {props.children}
    <Greeting name={message} />
    <AnotherContainer {...props} />
  </div>)
}