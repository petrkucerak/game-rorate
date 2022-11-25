import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function Consolamini() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Consolamini"}
        describtion="Consolamini neboli útěcha. Tu vám možná poskytne studna, možná ne. Nemáte ale čas odpočívat. Musíte ochránit sebe, svoji rodinu, svoji vesnici."
        coords="50.0219747N, 15.7696056E"
        question="Jak se jmenují prastaré adventní zpěvy?"
        answare="roráty"
        odpoved="#adAFq5A*"
      />
      <Footer />
    </main>
  );
}
