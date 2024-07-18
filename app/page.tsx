import { Button } from "./ui/button";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-800">
      <nav className="min-w-screen bg-slate-50 min-h-14 flex justify-between items-center py-0 px-5">
        <div className="text-3xl">
          NP
        </div>
        <div className="text-2xl">
          About
        </div>
      </nav>
      <section className="p-5 text-white gap-4 min-w-screen bg-zinc-800 border-t-4 border-cyan-400">
        <div className="flex gap-2 text-2xl">
          <div>
            Welcome to NP
          </div>
          <div>
            -
          </div>
          <div>
            The Next Project
          </div>
        </div>
        <div className="my-4">
          This is a Next.js project with Tailwind CSS, and it will be similar to &nbsp;
          <a target="_blank" href="https://github.com/flooyd/things">Svelte App Editor</a>,
          which can be found in my &nbsp;
          <a target="_blank" href="https://floydportfolio.vercel.app">portfolio</a>.
        </div>
        <div className="my-4">
          First, we will allow the user to create a new project, which will then assist the user in creating a flashcards app.
        </div>
        <div className="my-4 mb-5">
          More advanced features such as a backend, user authentication, and a database will be added later.
        </div>
        <Button>Get Started</Button>
      </section>
    </main>
  );
}
