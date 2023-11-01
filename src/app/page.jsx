import Animelist from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();
  // console.log(anime.data);
  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title="Paling Populer"
          LinkHref="/populer"
          LinkTitle="lihat semua"
        />
        <Animelist api={topAnime} />
      </section>
    </>
  );
};
export default Page;
