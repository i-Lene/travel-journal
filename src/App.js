import './App.css';
import travelsArray from './components/travelsArray';
import Card from './components/Card';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  let cards = travelsArray.map(card => {
    return (
      <Card
        url={card.img}
        country={card.country}
        attraction={card.attraction}
        start={card.startDate}
        end={card.endDate}
        description={card.description}
      />
    )
  });

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
