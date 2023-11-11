// import { useEffect } from "react";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero"
import "../Style.scss"

function App() {

  // useEffect(() => {
  //   fetch('https://localhost:3001/api/v1')
  //   .then((response) => {
  //     console.log({ response })
  //   })
  // }, [])

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