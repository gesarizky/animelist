import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );
  const searchAnime = await response.json();
  // console.log(anime.data);
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
