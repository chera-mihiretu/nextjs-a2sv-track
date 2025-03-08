import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <>
      <h1 className="font-sans text-[2.5rem] font-semibold text-[#4A90E2] text-center my-5">
        My Products
      </h1>
      <div className="App">
          <FilterableProductTable/>
      </div>
    </>
  );
}

export default App;
