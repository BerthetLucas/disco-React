import "./App.css";
import Panel from "./components/Panel";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [stock, setStock] = useState(null);
  const [trie, setTrie] = useState(null);

  const stockToContent = (stock) => {
    setStock(stock);
   
  };

  const Tri = (trie) => {
    setTrie(trie)
    
  }

  return (
    <div className="flex flex-row ">
      <Panel stock={stockToContent} trie={Tri} />
      <Content stockOnly={stock} byTrie={trie}/>
    </div>
  );
}

export default App;
