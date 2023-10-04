import './App.css';
import { Data } from './react-component/Data';

function App() {
  return (
    <div>
      <Data endpoint="data" title="Успешное получение данных" />
      <Data endpoint="error" title="Получение 500 ошибки" />
      <Data endpoint="loading" title="Индикатор загрузки" />
    </div>
  );
}

export default App;