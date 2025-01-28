
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import QuoteForm from "./components/QuoteForm";
import HomePage from "./components/HomePage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/quote' element={<QuoteForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
