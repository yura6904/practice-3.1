import './App.css';
import Films from './components/Films/Films';

function App() {
  const films = [
    {
      name: 'Супермен',
      path: '../../assets/superman.jpeg',
      stars: 4,
      price: 199
    },
    {
      name: 'Одинокий странник',
      path: '../../assets/lone-runner.jpeg',
      stars: 2,
      price: 99
    }
  ]

  const createStars = (stars) => {
    let listElement = []
      for (let i = 0; i < stars; i++) {
        listElement.push(
          <li className="li-star" key={"star" + i}>
            <span className="material-icons">
              star_rate
            </span>
          </li>
        )
      }
    return listElement
  }

  return (
    <Films films={films} createStars={createStars}/>
  );
}

export default App;
