import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function ElektrotechnikaANaradi() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Elektrotechnika a nářadí"}
        describtion="S dobrým generátorem, slušnou audiotechnikou a nějakými světly, třeba přečkáte celou toxickou katastrofu jako velkou party. No, není to lákavé?"
        coords="49.6797964N, 16.3368414E"
        question="Ridlasova rodina mne minulý rok obývala. Kolik mi je?"
        answare="21"
        odpoved="#bengaaa"
      />
      <Footer />
    </main>
  );
}
