const Projects = () => {
  return (
    <section className="text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto">
      {/* Seccion izquierda */}
      <section className="grid gap-10">
        <div>
          <h3 className="uppercase text-sm text-gray-400 font-semibold">
            My projects
          </h3>
          <h2 className="text-3xl font-semibold mt-2">
            Work that I’ve done for the past 8 years
          </h2>
        </div>

        <article className="bg-gray-d relative">
          <div>
            <img src="/images/project1.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Restaurant Website Design</h4>
            <p className="text-gray-400 text-sm">
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </p>
            <a
              href="#"
              className="bg-indigo-700 p-1 text-lg absolute bottom-0 right-0"
            >
              <i className="bx bx-link"></i>
            </a>
          </section>
        </article>

        <article className="bg-gray-d relative">
          <div>
            <img src="/images/project2.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Mobile Dashboard</h4>
            <p className="text-gray-400 text-sm">
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </p>
            <a
              href="#"
              className="bg-indigo-700 p-1 text-lg absolute bottom-0 right-0"
            >
              <i className="bx bx-link"></i>
            </a>
          </section>
        </article>
      </section>

      {/* Seccion derecha */}
      <section className="grid gap-10">
        <article className="bg-gray-d relative">
          <div>
            <img src="/images/project3.png" alt="" />
          </div>
          <section className="p-6">
            <h4>CoinView Mobile App Design</h4>
            <p className="text-gray-400 text-sm">
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </p>
            <a
              href="#"
              className="bg-indigo-700 p-1 text-lg absolute bottom-0 right-0"
            >
              <i className="bx bx-link"></i>
            </a>
          </section>
        </article>

        <article className="bg-gray-d relative">
          <div>
            <img src="/images/project4.png" alt="" />
          </div>
          <section className="p-6">
            <h4>T-Box Mobile Design</h4>
            <p className="text-gray-400 text-sm">
              I worked with the guys at CBRE to redesign their entire website
              and mobile app fro both Android and iOS. This project lasted for 4
              months and was a very challenging one.
            </p>
            <a
              href="#"
              className="bg-indigo-700 p-1 text-lg absolute bottom-0 right-0"
            >
              <i className="bx bx-link"></i>
            </a>
          </section>
        </article>

        <button className="border-[1px] border-indigo-700 p-4 max-w-max mx-auto">VIEW ALL PROJECTS</button>
      </section>
    </section>
  );
};
export default Projects;
