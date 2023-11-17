import "../Hero/Hero.scss";
import bankTree from "../../img/bank-tree.webp"
import bankTree300 from "../../img/bank-tree-300.webp"
import bankTree980 from "../../img/bank-tree-980.webp"
import bankTree1360 from "../../img/bank-tree-1360.webp"
import bankTree1650 from "../../img/bank-tree-1650.webp"
import bankTree1860 from "../../img/bank-tree-1860.webp"
import bankTree2048 from "../../img/bank-tree-2048.webp"

function Hero() {
  return (
    <div className="hero">
        <img src={bankTree}
        srcSet={`${bankTree300} 300w, ${bankTree980} 980w, ${bankTree1360} 1360w, ${bankTree1650} 1650w, ${bankTree1860} 1860w, ${bankTree2048} 2048w`}
        sizes="100vw"
        className="hero-background" alt="arbre de bank"/>
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