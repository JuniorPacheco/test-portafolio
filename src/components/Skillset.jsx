import React from "react";

const Skillset = () => {
  return (
    <section className="text-white px-2 py-12 max-w-[1000px] mx-auto">
      {/* Subseccion superior */}
      <section className="md:grid md:grid-cols-[1fr_auto] md:gap-16">
        <article>
          <h3 className="font-bold text-3xl">Skillset</h3>
          <p className="text-gray-400 mt-3">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </article>

        <section className="grid gap-12 pt-6 md:grid-cols-2 md:gap-x-32">
          <article>
            <div>
              <img src="/images/ficha.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-3">Frameworks</h4>
            <ul className="text-gray-400">
              <li>React</li>
              <li>Wordpress</li>
              <li>Boostrap</li>
            </ul>
          </article>

          <article>
            <div>
              <img src="/images/ficha.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-3">Source Control</h4>
            <ul className="text-gray-400">
              <li>Git/Github</li>
              <li>Bitbucket</li>
              <li>SCRUM / Agil</li>
            </ul>
          </article>

          <article>
            <div>
              <img src="/images/ficha.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-3">Languages</h4>
            <ul className="text-gray-400">
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>Javascript</li>
            </ul>
          </article>

          <article>
            <div>
              <img src="/images/ficha.png" alt="" />
            </div>
            <h4 className="text-2xl font-semibold my-3">UX/UI</h4>
            <ul className="text-gray-400">
              <li>Wireframing/UML</li>
              <li>Adobe Suite</li>
              <li>Elementor Expert</li>
            </ul>
          </article>
        </section>
      </section>

      {/* Subseccion inferior (Logos) */}
      <section className="grid grid-cols-2 mt-12 sm:grid-cols-4">
        <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
          <img src="/images/logo1.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
          <img src="/images/logo2.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
          <img src="/images/logo3.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
          <img src="/images/logo4.png" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Skillset;
