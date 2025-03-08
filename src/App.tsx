import { Pagination } from './components/Pagination';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Демо компонента пагинации</h1>
      <h2>Обычная пагинация</h2>
      <div className="pagination-container">
        <Pagination totalPages={10} isLooped={false} jumpStep={3} />

        <h2>Зацикленная пагинация</h2>
        <Pagination totalPages={10} isLooped={true} jumpStep={3} />
      </div>
    </div>
  );
}

export default App;
