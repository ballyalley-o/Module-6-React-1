function Greeting(props) {
  //const greet1st = document.getElementById("greeting"); //we don't access the DOM like this directly in react

  return (<h1>Hello {props.name}!</h1>); //instead we use props and state to store/manage those values in memory
}



export default Greeting;
