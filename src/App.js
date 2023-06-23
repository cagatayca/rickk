import axios from "axios";
import { useEffect,useState} from "react";
import './App.css';
import CharInfos from "./components/CharInfos.js";
import SearchBar from "./components/SearchBar";



function App() {
  const [messages, setMessages] = useState([]);
  const [searchName, setSearchName] = useState("")
  const handleChange = e => setSearchName(e.target.value)
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setMessages(response.data.results)); 
  }, []);
  return (
    <div className="App">
      <div className="m-8">
      <h className="text-teal-600 font-extrabold font-mono text-4xl ">Rick And Morty</h >
      </div>
      <div className="m-8">
      <SearchBar searchName={searchName} onSearchChange={handleChange}/>
      </div>
      <CharInfos messages={messages} searchName={searchName}/>
    </div>
  );
}

export default App;
