import Link from "next/link";

export default async function Home() {
  return (
    <>
      <header className="flex flex-col items-center text-center my-16 px-6">
        <h1 className="text-4xl font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-700 to-orange-300 bg-clip-text text-transparent">
          Discover Movies Like Never Before
        </h1>
        <p className="text-lg text-black mt-3">
          Explore & Share Your Favorite Films
        </p>
        <Link
          href="/movie-catalogue"
          className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:from-teal-600 hover:to-green-600"
        >
          Browse Movies
        </Link>
      </header>

      <main className="w-full max-w-3xl mx-auto px-6">
        <section className="text-center text-black mb-12">
          <h2 className="text-2xl font-bold ">How it Works</h2>
          <p className="mt-3 leading-relaxed">
            Rotten Potato is a platform for film enthusiasts to share their
            favorite movies with the world. Discover new films and connect with
            fellow movie lovers.
          </p>
        </section>

        <section className="text-center text-black">
          <h2 className="text-2xl font-bold ">Why Rotten Potato?</h2>
          <p className="mt-3 leading-relaxed">
            Rotten Potato is the ultimate destination for film buffs. Discover
            hidden gems, rate your favorites, and dive into discussions with
            like-minded cinephiles.
          </p>
        </section>
      </main>
    </>
  );
}
