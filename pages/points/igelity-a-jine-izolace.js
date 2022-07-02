import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function IgelityAJineIzolace() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Igelity a jiné izolace"}
        describtion="Dnes je svět přeplněn různými plasty a odpady. Kolik z nich by šlo ovšem použít jako těsnění na váš improvizovaný příbytek? No, právě, že moc ne. Proto si musíte jít nějaký opatřit samy."
        coords="49.6768131N, 16.3356686E"
        question="Poutníka občerstvím tebe možná taky. Jakou barvu mám?"
        answare="zlatou"
        odpoved="#DFDS5as"
      />
      <Footer />
    </main>
  );
}
