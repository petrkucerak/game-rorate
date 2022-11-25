import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function EmmitteAfnumDominatorem() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Emítte Agnum Dominatórem"}
        describtion="Emítte Agnum Dominatórem neboli pošlete Beránka Vládce. Když moudří staří psali tato slova, mysleli je ale asi zcela jinak. Abyste zrychli svoji cestu, běžíte i přes pastviny, kde se potulují nebezpeční berani."
        coords="50.0211236N, 15.7698953E"
        question="Za vlády jakého panovníka se bavíme o vzniku padventních zpěvů?"
        answare="karla4"
        odpoved="#DFdS5as"
      />
      <Footer />
    </main>
  );
}
