import "./App.css";
import Card from "./components/Card";
import Head from "./components/Head";
import data from "./data";

function App() {
  const destinationList = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div className='App'>
      <Head />
      {destinationList}
    </div>
  );
}

export default App;
