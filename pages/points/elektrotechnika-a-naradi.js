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
        coords="50.0827442N, 14.4170369E"
        question="Jsme tři a jsme na autech. Kolik vyjde, když nás sečteš?"
        answare="14"
        odpoved="#bengaaa"
      />
      <Footer />
    </main>
  );
}
