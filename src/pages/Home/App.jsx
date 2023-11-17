import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero"
import { featuresInfo } from '../../components/Features/FeaturesInfo.js'
import "../Style.scss"

function App() {
  
  return (
    <div>
      <div className="body">
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
            <Features src={featuresInfo[0].src} alt={featuresInfo[0].alt} title={featuresInfo[0].title} p={featuresInfo[0].p}/>
            <Features src={featuresInfo[1].src} alt={featuresInfo[1].alt} title={featuresInfo[1].title} p={featuresInfo[1].p}/>
            <Features src={featuresInfo[2].src} alt={featuresInfo[2].alt} title={featuresInfo[2].title} p={featuresInfo[2].p}/>
        </section>
      </div>
    </div>
  );
}

export default App;