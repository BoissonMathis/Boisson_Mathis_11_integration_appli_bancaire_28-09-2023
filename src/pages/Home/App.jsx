import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero"
import "../Style.scss"

function App() {

  return (
    <div>
      <div className="body">
        <Hero />
        <Features />
      </div>
    </div>
  );
}

export default App;