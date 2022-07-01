import Footer from "../components/footer";
import Headerak from "../components/headerak";
import Welcome from "../components/welcome";

export default function Home() {
  return (
    <>
      <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
        <Headerak />
        <Welcome />
        <Footer />
      </main>
    </>
  );
}
