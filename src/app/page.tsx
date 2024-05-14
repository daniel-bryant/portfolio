import Article from "@/components/Article"
import FlavorButton from "@/components/FlavorButton"
import Pair from "@/components/Pair"
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
      <Article title="👋 About">
        <p>
          I&apos;m a software engineer and team leader with {proYears} years of
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

      <Article title="🎓 Background">
        <Pair>
          <Image src={gmuLogo} alt="GMU Logo" height={32} />
          <p className="font-semibold">George Mason University</p>
        </Pair>
      </Article>

      <Article title="🤖 Languages">
        <Pair>
          <Image src={typescriptLogo} alt="TypeScript Logo" height={32} />
          <p className="font-semibold">TypeScript</p>
        </Pair>
        <Pair>
          <Image src={rubyLogo} alt="Ruby Logo" height={32} />
          <p className="font-semibold">Ruby</p>
        </Pair>
      </Article>

      <Article title="🧰 Skills">
        <Pair>
          <Image src={reactLogo} alt="React Logo" height={32} />
          <p className="font-semibold">React</p>
        </Pair>
        <Pair>
          <Image src={nextLogo} alt="Next.js Logo" height={32} />
        </Pair>
        <Pair>
          <p className="font-semibold">Ruby on</p>
          <Image src={railsLogo} alt="Ruby on Rails Logo" height={32} />
        </Pair>
        <Pair>
          <Image src={postgresLogo} alt="PostgreSQL Logo" height={32} />
          <p className="font-semibold">PostgreSQL</p>
        </Pair>
      </Article>
    </Main>
  )
}
