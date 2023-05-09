const Behance = () => {
  return (
    <section className="max-w-[1000px] mx-auto text-white sm:grid sm:grid-cols-2">
      <article className="bg-pink-100 text-black py-10 px-2 grid gap-12 sm:grid sm:content-between">
        <div>
          <h3 className="text-2xl font-bold mb-4">Behance</h3>
          <p className="text-gray-500">
            If you area a person who enjoys photography, then I highly recommend
            that you check out my Instagram. I’m an avid traveller and I capture
            the best moments that I would love to cherish with the world
          </p>
        </div>

        <a className="border-b-2 border-gray-400 max-w-max pb-1" href="#">
          Follow me on Behance
        </a>
      </article>

      <article>
        <img
          className="w-full h-[400px] object-cover"
          src="/images/behance.png"
          alt=""
        />
      </article>
    </section>
  );
};
export default Behance;
