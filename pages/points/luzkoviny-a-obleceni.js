
import Footer from "../../components/footer";
import Point from "../../components/point";
import Headerak from "../../components/headerak";

export default function LuzkovinyAObleceni() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Lůžkoviny a oblečení"}
        describtion="Neprochladnout v noci? Vyrobit si ochranné obleky před toxickým deštěm? Možná pokud získáte tuto surovinu, tak se vám to povede."
        coords="49.6797489N, 16.3386181E"
        question="Mocní mongolští bojovníci smáčeli své tváře v bojové barvy a po výhrách se zde radovali. Jak se jmenuje město odkud pochází?"
        answare="ulambatar"
        odpoved="#národnííí12387"
      />
      <Footer />
    </main>
  );
}
