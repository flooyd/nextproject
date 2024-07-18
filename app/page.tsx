'use client';

import { Button } from "./ui/button";
import { useContext, useEffect } from "react";
import { ElementsContext } from "./ui/context-provider";
import { Element } from "./ui/element";
import { raleway } from "./ui/fonts";

export default function Page() {
  const { elements, setElements } = useContext(ElementsContext);


  const addElement = () => {
    setElements((elements) => [
      ...elements,
      {
        id: elements.length + 1,
        name: `Element ${elements.length + 1}`,
        className: 'bg-cyan-400'
      }
    ]);

    console.log('hi', setElements);
  }

  return (
    <main className="min-h-screen bg-zinc-800">
      <nav className={`${raleway.className} min-w-screen bg-slate-50 min-h-14 flex justify-between items-center py-0 px-5`}>
        <div className="text-3xl">
          NAB
        </div>
        <div className="text-2xl">
          About
        </div>
      </nav>
      <section className="p-5 text-white gap-4 min-w-screen bg-zinc-800 border-t-4 border-cyan-400">
        <div className={`${raleway.className} text-2xl`}>
          Next App Builder
        </div>
        <div className="my-4">
          This is a Next.js project with Tailwind CSS, and it will be similar to &nbsp;
          <a target="_blank" href="https://github.com/flooyd/things">Svelte App Editor</a>,
          which can be found in my &nbsp;
          <a target="_blank" href="https://floydportfolio.vercel.app">portfolio</a>.
        </div>
        <div className="my-4 mb-5">
          More advanced features such as a backend, user authentication, and a database will be added later.
        </div>
        <Button onClick={addElement}>Get Started</Button>
      </section>
      <section className="p-5 text-white gap-4 min-w-screen bg-zinc-800 border-t-4 border-cyan-400">
        <div className="text-2xl">
          Elements
        </div>
        <div className="my-4 flex flex-col gap-2">
          {elements.map((element) => (
            <Element key={element.id} tag="button" className={element.className}>
              {element.name}
            </Element>
          ))}
        </div>
      </section>
    </main>
  );
}
