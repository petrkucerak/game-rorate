import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function VideDomine() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Vide, Dómine"}
        describtion="Vide, Dómine neboli podívej se Pane. Na některé věci zkrátka nestačí člověk sám. Proto i vy se budete muset zeptat ve svém okolí."
        coords="50.0213106N, 15.7709119E"
        question="Jaký se jmenoval táta svaté, která je hlavní hrdinkou textů při těchto obřadech?"
        answare="jáchym"
        odpoved="#Svaty"
      />
      <Footer />
    </main>
  );
}
