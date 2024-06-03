import Article from "@/components/Article"
import FlavorButton from "@/components/FlavorButton"
import Main from "@/components/Main"
import gmuLogo from "@/img/gmu.svg"
import nextLogo from "@/img/nextjs.svg"
import postgresLogo from "@/img/postgresql.svg"
import railsLogo from "@/img/rails.svg"
import reactLogo from "@/img/react.svg"
import rubyLogo from "@/img/ruby.svg"
import typescriptLogo from "@/img/typescript.svg"
import Image from "next/image";

const allYears = new Date().getFullYear() - 2009
const proYears = new Date().getFullYear() - 2012

export default function Home() {
  return (
    <Main>
      <Article title="Daniel Joseph Bryant 👋">
        <p className="font-semibold  text-lg">Software Engineer</p>
        <p>
          I&apos;m an engineer and team leader with {proYears} years of
          professional experience and {allYears} years building websites.

          I have the true spirit of a full stack engineer so I&apos;ve done it
          all, from CSS to DevOps.

          I&apos;m a strong believer in using the right tool for the job.

          I prefer either duck typing or static typing depending on the context.

          I&apos;ve used popular languages like Ruby and TypeScript and
          lesser-used ones like Lua and Rust.

          I code in Neovim because I&apos;ve spent hours tweaking my setup 🥁.

          I prefer a bright room and light mode myself, but you can try other
          catppuccin flavors by clicking {' '} <FlavorButton />.
        </p>
      </Article>

      <Article title="Education 🎓">
        <div className="flex flex-row gap-4 my-2">
          <Image src={gmuLogo} alt="GMU Logo" height={32} />
        </div>

        <div className="font-semibold">
          George Mason University 2012
        </div>
        <div className="font-semibold">
          Bachelor of Science in Computer Science
        </div>
      </Article>

      <Article title="Languages 🤖">
        <div className="flex flex-row flex-wrap gap-2 my-2">
          <Image src={typescriptLogo} alt="TypeScript Logo" height={32} />
          <Image src={rubyLogo} alt="Ruby Logo" height={32} />
        </div>

        <div className="font-semibold">Most used</div>
        <ul className="list-disc pl-4">
          <li>Ruby</li>
          <li>SQL</li>
          <li>TypeScript</li>
        </ul>

        <div className="font-semibold">Professionally used</div>
        <ul className="list-disc pl-4">
          <li>C</li>
          <li>C++</li>
          <li>Go</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Rust</li>
          <li>Swift</li>
        </ul>
      </Article>

      <Article title="Technologies 💻">
        <div className="flex flex-row flex-wrap gap-2 my-2">
          <Image src={reactLogo} alt="React Logo" height={32} />
          <Image src={railsLogo} alt="Ruby on Rails Logo" height={32} />
          <Image src={postgresLogo} alt="PostgreSQL Logo" height={32} />
          <Image src={nextLogo} alt="Next.js Logo" height={32} />
        </div>

        <div className="font-semibold">Most used</div>
        <ul className="list-disc pl-4">
          <li>Next.js</li>
          <li>PostgreSQL</li>
          <li>React</li>
          <li>Ruby on Rails</li>
        </ul>

        <div className="font-semibold">Professionally used</div>
        <ul className="list-disc pl-4">
          <li>Angular</li>
          <li>FastAPI</li>
          <li>Flask</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Redis</li>
          <li>SQLAlchemy</li>
          <li>jQuery</li>
        </ul>
      </Article>
    </Main>
  )
}
