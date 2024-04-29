import React, { useState } from 'react';

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === lowerCaseSearchTerm);
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <p>Definition: </p>
      <p>{definition}</p>
    </div>
  );
};

export default XDictionary;
