import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-lekker-neutral-light text-lekker-neutral-dark dark:bg-lekker-neutral-dark dark:text-lekker-neutral-light">
      <Header />
      <main className="flex-grow">
        {/* Hero Section Placeholder */}
        <section className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lekker-primary-blue/10 to-lekker-secondary-coral/10 opacity-50"></div>
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <span className="inline-block bg-lekker-primary-blue/10 text-lekker-primary-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Award-Winning Digital Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
              Digital Experiences That Drive Results
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Lekkersite crafts stunning, high-performance websites and digital solutions that transform visitors into loyal customers. Your vision, our expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/portfolio">
                <Button className="rounded-full bg-gradient-to-r from-lekker-primary-blue to-lekker-secondary-coral px-8 py-3 text-white text-lg shadow-soft-layered hover:from-lekker-secondary-coral hover:to-lekker-primary-blue transition-all duration-300">
                  View Our Work
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="rounded-full border-2 border-lekker-primary-blue text-lekker-primary-blue px-8 py-3 text-lg hover:bg-lekker-primary-blue hover:text-white transition-colors duration-300">
                  Book a Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </section>
        {/* More sections will go here */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;