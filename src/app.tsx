import React from 'react';

function Greeter(props: any) {
  return <div> Hello {props.name}!</div>;
}

function App() {
  return (
    <div>
      <Greeter name="Akshay" />
      <Greeter name="Panth" />
    </div>
  );
}

export default App;
