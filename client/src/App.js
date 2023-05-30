import './App.css';
import Either from './Either';
import SingleUpload from './SingleUpload';
import UploadXl from './UploadXl';

function App() {
  return (
    <div className="App">
     <UploadXl />
     <SingleUpload />
     <Either />
    </div>
  );
}

export default App;
