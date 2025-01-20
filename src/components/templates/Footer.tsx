import { FaInstagramSquare, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="img-ornament bg-cover bg-center">
      <section className="container mx-auto px-3 lg:px-12">
        <section className="flex flex-col lg:flex-row gap-3 py-6">
          <figure className="flex flex-col md:w-1/2 gap-y-3 md:gap-y-6">
            <img src="/logo.png" alt="assets" className="w-32" />
            <p className="text-sm">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </figure>
          <figcaption className="figcaption-footer w-full flex justify-between lg:justify-around">
            <section>
              <h5>Work</h5>
              <p>Blog</p>
              <p>How To Work</p>
              <p>Testimonials</p>
            </section>
            <section>
              <h5>Services</h5>
              <p>Marketing Strategy</p>
              <p>Website Optimization</p>
              <p>Email Maerketing</p>
            </section>
            <section>
              <h5>Business Solution</h5>
              <p>Partnership</p>
              <p>About Project</p>
              <p>Corporate</p>
            </section>
          </figcaption>
        </section>
        <section className="flex justify-between items-center py-6">
          <p>&copy; DaCode {year}. All Rights Reserved</p>
          <section className="flex gap-x-3">
            <FaFacebook size={20} />
            <FaInstagramSquare size={20} />
            <FaTwitter size={20} />
          </section>
        </section>
      </section>
    </footer>
  );
}
