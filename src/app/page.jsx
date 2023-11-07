import Animelist from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 8);
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
      {/* anime rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <Animelist api={recommendedAnime} />
      </section>
    </>
  );
};
export default Page;
