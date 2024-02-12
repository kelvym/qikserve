import { Banner } from "./_components/banner";
import { Navbar } from "./_components/navbar";
import { Search } from "./_components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Banner />
      <Search />
    </main>
  );
}
