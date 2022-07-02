import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function JidloAPotraviny() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Jídlo a potraviny"}
        describtion="Bez jídla a stravy nikdo nevydrží dlouho. I když máte-li zájem, můžete to klidně zkusit. Pokud se ale chcete pořádně připravit, musíte odpovědět na následující otázku."
        coords="49.6794908N, 16.3375700E"
        question="Od nepaměti zde stojím, epické bitvy jsem zažil. A Ulambátar je nelepší! Co jsem?"
        answare="nisaplast"
        odpoved="#adAFS5A*"
      />
      <Footer />
    </main>
  );
}
