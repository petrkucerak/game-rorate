import Link from "next/link";
import Head from "next/head";

export default function Headerak() {
  return (
    <>
      <Head>
        <title>Coeli desuper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="w-full text-center border-y-2 border-sunflower">
        <Link href="/">
          <a>
            <h1 className="text-xl uppercase font-bold my-4 text-sunflower">
              Coeli desuper
            </h1>
          </a>
        </Link>
      </header>
    </>
  );
}
