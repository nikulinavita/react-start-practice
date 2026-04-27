import './App.css';
import ResourceList from './components/ResourceList';

function App() {

  const educationalData = [
    {
      id: 1, 
      title: "Irregular Verbs",
      level: "A2",
      format: "Game (Genially)"
    },
    {
      id: 2,
      title: "Comparatives and Superlatives",
      level: "A1 Kids",
      format: "Miro Board"
    },
    {
      id: 3,
      title: "Past Perfect Tense",
      level: "B1",
      format: "Canva Lesson Plan"
    }
  ];

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#f494ce' }}>📚 ESL Teacher's Toolkit 📚</h1>
      
      { }
      <ResourceList materials={educationalData} />
      
    </div>
  );
}

export default App;