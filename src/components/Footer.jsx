const Footer = () => {
  return (
    <section className="bg-gray-d py-20 text-white px-3">
      
      <article className="grid gap-6 max-w-[1200px] mx-auto sm:grid-cols-2">
        
        <section>
          <div>
            <img src="/images/nameFooter.png" alt="" />
          </div>

          <div className="flex gap-4 py-6">
            <img src="/images/iconSocialMedia3.svg" alt="" />
            <img src="/images/iconSocialMedia.svg" alt="" />
            <img src="/images/iconSocialMedia2.svg" alt="" />
          </div>
        </section>

        <section className="grid grid-cols-2">

          <article className="grid gap-6">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Process</a>
          </article>

          <article className="grid gap-6">
            <a href="#">Store</a>
            <a href="#">Blog</a>
            <a href="#">Reading List</a>
          </article>

        </section>

      </article>
      
    </section>
  )
}
export default Footer