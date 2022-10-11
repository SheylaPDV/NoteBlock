// import TextArea from "./components/textArea/TextArea.jsx";
import "./App.css";
import Greting from "./components/Increment";
import { Index } from "./pages";
// import TodoApp from "./components/textArea/TextArea.jsx";

function App() {
  return (
    <div className="container py-5">
      <h3>NoteBlock</h3>
      <Greting />
      <Index />
    </div>
  );
}

export default App;
