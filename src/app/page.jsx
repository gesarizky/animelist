import Animelist from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
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
