
import Login from "./Login";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import muluya from './Photos/muluya_foundation.jpg';
import kasneb from './Photos/kasneb-logo.png';
import profia from './Photos/profia.png';
import hero from './Photos/hero.jpg'
import CustomerCarousel from "./CustomerCarousel";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen p-4 sm:p-12 md:p-24 bg-gray-50 max-w-full">
      {/* Header Section */}
      <header>
        <div className="hidden sm:flex justify-between items-center mb-12">
          <Login />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto shadow-xl h-auto mb-24 bg-white p-8 md:p-12 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Unlock Tailored Insights for Your Business
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Increase revenue and grow your customer base with actionable data and seamless integrations.
        </p>
        <Link href='/sign-in/'
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md transition duration-300"
        >
          Start Your Free Trial
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          No credit card required. Cancel anytime.
        </p>
        {/* The Hero Image */}
        <div className="mt-8">
          <Image src={hero} alt="hero" layout="responsive" width={700} height={500} className="rounded-md shadow-lg" />
        </div>
      </section>


      {/* Customer Testimonials - Carousel Format */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-4 text-center">What Our Customers Say</h2>
        <CustomerCarousel />
        <div className="flex justify-center mb-4">
          <span className="text-2xl font-bold mr-2 flex flex-row">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
            <FaStar className="text-gray-300" />
          </span>
          <span className="text-3xl font-bold mr-2">4.5/5</span>
          <span className="text-sm text-gray-500">based on 100+ reviews</span>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="max-w-xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center space-x-8">
          {[muluya, kasneb, profia].map((partner, index) => (
            <div key={index} className="w-24 md:w-36 lg:w-40 transition duration-300 hover:scale-105 mb-4">
              <Image src={partner} alt={`Partner ${index + 1}`} className="rounded-md shadow-md" layout="responsive" width={500} height={500} />
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding Process Section for New Customers */}
      <section className="max-w-4xl mx-auto mb-24 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-center">Easy Onboarding in 3 Steps</h2>
        <div className="flex flex-col md:flex-row justify-around">
          {[
            { step: "1", title: "Sign Up", description: "Create an account to access personalized business insights." },
            { step: "2", title: "Set Goals", description: "Define your growth objectives, and we’ll tailor insights to help you reach them." },
            { step: "3", title: "Get Insights", description: "Start using our intuitive dashboard to analyze key performance indicators." }
          ].map((item, index) => (
            <div key={index} className="flex-1 p-4 text-center mb-4 md:mb-0">
              <span className="text-5xl font-bold text-orange-500">{item.step}</span>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-md text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md transition duration-300"
          >
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="max-w-lg mx-auto text-center">
        <ul className="flex justify-center space-x-4">
          <li className="mr-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
              About Us
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
              Contact Us
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
              Terms of Service
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
              Privacy Policy
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-3">
          &copy; 2024 Business Analytics. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
