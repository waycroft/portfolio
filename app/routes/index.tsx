export default function Index() {
  return (
    <div className="mx-auto p-8 border-[32px] border-neutral h-screen">
      <section>
        <div className="font-body whitespace-pre">
          <p className="italic font-thin text-base-content">/**</p>
          <p className="italic font-thin text-base-content">
            {" "}
            * Full-stack developer
          </p>
          <p className="italic font-thin text-base-content"> */</p>
        </div>
        <h1 className="font-header text-6xl">
          <span className="font-bold text-base-content">Tyler Termini </span>
        </h1>
        <h2 className="hidden">Full-stack developer</h2>
        <div className="font-body">
          <p className="text-4xl">
            Co-founder{" "}
            <a className="underline" href="https://cicero.ly" target="_blank">
              Cicero.ly.
            </a>
          </p>
          <p className="text-3xl">
            I'm a software developer who's had a lifelong passion for tools, for
            the people who make them, and thinking how we might build them such
            that it
            <span className="text-accent font-bold italic">
              {" "}
              makes making
            </span>{" "}
            a humane society easier for everybody.
          </p>
          <p>
            {" "}
            Donec congue turpis lorem, a suscipit sem mattis interdum. Sed quam
            mauris, feugiat ac massa id, dignissim finibus tortor. Nullam nec
            libero et felis porttitor maximus vitae ut nunc. Aliquam sagittis
            pharetra quam vel interdum. Integer quam leo, vulputate et mattis
            nec, imperdiet nec dui. Suspendisse et eros a tortor ultrices
            pellentesque non pharetra tortor. Cras eu feugiat nisl. Morbi
            elementum scelerisque metus, sit amet volutpat magna consequat sit
            amet. Proin nec lacus at arcu congue pretium et eu massa. Donec ac
            eros faucibus, tempor magna vitae, fringilla risus. Suspendisse
            pharetra mi ut nulla pellentesque luctus ac id odio. Aenean magna
            diam, hendrerit nec lacus in, mollis interdum metus. Etiam rhoncus
            sollicitudin blandit. Vestibulum a euismod lectus. Aliquam tortor
            velit, scelerisque ac aliquet condimentum, congue ut nulla.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
