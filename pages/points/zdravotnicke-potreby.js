import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function ZdravotnickePotreby() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Zdravotnické potřeby"}
        describtion="Už od dob dávných platí, že vědět, znamená mnoho. A v medicíně především. Vždyť například s první pitvou bylo objeveno tolik nových věcí. Chcete-li získat zdravotnické potřeby, na kterých zajisté bude záviset vaše přežití, musíte správně odpovědět na otázku."
        coords="49.6781489N, 16.3359019E"
        question="Vedle ohně jsem ba nehořím i když mohu. Co jsem?"
        answare="špalek"
        odpoved="#sdfDS58*"
      />
      <Footer />
    </main>
  );
}
