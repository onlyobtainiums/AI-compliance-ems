import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; // Import the new HeroSection component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-lekker-neutral-light text-lekker-neutral-dark dark:bg-lekker-neutral-dark dark:text-lekker-neutral-light">
      <Header />
      <main className="flex-grow">
        <HeroSection /> {/* Use the HeroSection component here */}
        {/* More sections will go here */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;