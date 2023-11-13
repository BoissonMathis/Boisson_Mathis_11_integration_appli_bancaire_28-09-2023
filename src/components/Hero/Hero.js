import "../Hero/Hero.scss";
import bankTree from "../../img/bank-tree-2000.webp"

function Hero() {
  return (
    <div className="hero">
        <img src={bankTree} className="hero-background" alt="arbre de bank"/>
        <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
    </div>
  );
}

export default Hero;