import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to NextLearn</h1>
      <p className="text-lg text-center mb-6">Your platform to learn and grow!</p>
      <Button>Start Learning</Button>
      <ModeToggle />
    </main>
  );
}
