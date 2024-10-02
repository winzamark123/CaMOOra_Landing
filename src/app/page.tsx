import Landing from './_components/Landing';
import Features from './_components/Features';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Landing />
      <Features />
    </main>
  );
}
