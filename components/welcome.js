import Link from "next/link";

export default function Welcome() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="w-[85vw] max-w-[1000px] flex flex-col items-start justify-center my-8">
        <h2 className="text-4xl font-bold mb-4">Naděje umírá poslední...</h2>
        <p className="mb-4">
          Vítejte v době vlády Karla IV. Země koruny české pod vládou mocného
          vladaře vzkvétá. Vy jste ale obyvatelé malé horské vesničky, která je
          od města vzdálena mnoho kilometrů. Živíte se rukama. Pracujete na
          poli.
        </p>
        <p className="mb-4">
          Jedné noci se ale stalo, že do vaší vesničky vtrhli barbaři z hor.
          Jsou to pohané. Vyznávají mnoho bohů, krmí se malými dětmi, zabijí,
          vraždí a znásilňují. Vy máte jedinou možnost – utéci a schovat se.
        </p>
        <p>
          Traduje se, že na hoře nad vaší vesnicí stojí starý klášter, který je
          zasvěcený Panně Marii. Každý, kdo se do něho schová a řekne určitou
          větu, bude ochráněn. Vám se nechce moc věřit, ale neexistuje jiné
          řešení. Zbývá než věřit, že se stane zázrak.
        </p>
      </div>
      <div className="w-[85vw] max-w-[1000px] flex flex-col items-start justify-center my-8">
        <h2 className="text-4xl font-bold mb-4">Místa nápověd...</h2>
        <ol className="list-decimal pl-6 text-sunflower">
          <li>
            <Link href="/points/consolamini">
              <a>Consolámini</a>
            </Link>
          </li>
          <li>
            <Link href="/points/vide-domine">
              <a>Vide, Dómine</a>
            </Link>
          </li>
          <li>
            <Link href="/points/emitte-agnum-dominatorem">
              <a>Emítte Agnum Dominatórem</a>
            </Link>
          </li>
          <li>
            <Link href="/points/ne-irascaris">
              <a>Ne irascáris</a>
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}
