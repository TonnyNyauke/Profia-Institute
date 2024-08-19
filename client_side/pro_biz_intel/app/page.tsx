'use client'

import Login from "./Login";
import ColorModeToggle from './ColorModeToggle'
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import muluya from './Photos/muluya_foundation.jpg'
import Image from "next/image";
import kasneb from './Photos/kasneb-logo.png'
import profia from './Photos/profia.png'


export default function Home() {
  const [toggle, setToggle] = useState(false);

  function openLogin(){
    setToggle(true)
  }

  return (
    <main className="min-h-screen p-24">
      <div className="flex justify-end mb-12">
        {!toggle && (
          <button
            className="border border-blue-500 rounded-md font-semibold px-2 py-2 mx-4 hover:bg-blue-500 hover:text-white transition duration-300"
            onClick={openLogin}
          >
            Login
          </button>
        )}
        {toggle && <Login />}
        <ColorModeToggle />
      </div>

      <section className="hero max-w-4xl mx-auto shadow-lg h-96 mb-24">
        <h1 className="text-4xl font-bold mb-4">Unlock Insights, Drive Growth</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get actionable insights into your business performance with our intuitive analytics platform.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Get Started
        </button>
      </section>

      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <div className="flex flex-row mb-8">
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 border border-gray-300 rounded-sm mx-2">
            <div className="mx-4">
              <p className="text-lg text-gray-600 mb-2">
                "Business Analytics has been a game-changer for our company. We've seen a 20% increase in sales since implementing their platform."
              </p>
              <p className="text-sm text-gray-500">- John Doe, CEO of XYZ Inc.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 border border-gray-300 rounded-sm mx-2">
            <div className="mx-4">
              <p className="text-lg text-gray-600 mb-2">
                "The insights we've gained from Business Analytics have helped us optimize our marketing strategy and reduce costs by 15%."
              </p>
              <p className="text-sm text-gray-500">- Jane Smith, Marketing Manager at ABC Corp.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 border border-gray-300 rounded-sm mx-2">
            <div className="mx-4">
              <p className="text-lg text-gray-600 mb-2">
                "Business Analytics has given us a competitive edge in our industry. We can't imagine going back to our old way of doing things."
              </p>
              <p className="text-sm text-gray-500">- Bob Johnson, Founder of DEF Startups</p>
            </div>
          </div>
        </div>
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

    <section className="max-w-xl mx-auto mb-24">
      <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
      <div className="flex flex-row mb-8">
        <div className="w-full md:w-1/2 xl:w-1/3 mb-4 mx-6">
          <Image src={muluya} alt="mulya" width={500} height={500} className="rounded-md shadow-md"/>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 mb-4 mx-6">
          <Image src={kasneb} alt="mulya" width={500} height={500} className="w-full rounded-md shadow-md"/>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 mb-4 mx-6">
        <Image src={profia} alt="mulya" width={500} height={500} className="w-full rounded-md shadow-md"/>
        </div>
      </div>
    </section>

    <section className="max-w-xl mx-auto mb-24">
      <h2 className="text-3xl font-bold mb-4">Join the Thousands of Businesses Already Using Our Platform</h2>
      <p className="text-lg text-gray-600 mb-8">
        5,000+ businesses trust Business Analytics to drive growth and improve performance.
      </p>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Get Started
      </button>
    </section>
    <section className="max-w-xl mx-auto mb-24">
    <h2 className="text-3xl font-bold mb-4">See Our Platform in Action</h2>
    <div className="flex flex-wrap mb-8">
      <div className="w-full md:w-1/2 xl:w-1/2 mb-4">
        <Image src={muluya} alt="mulya" width={500} height={500} className="w-full rounded-md shadow-md"/>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 mb-4">
        <img src="screenshot-2.png" alt="Screenshot 2" className="w-full rounded-md shadow-md" />
      </div>
    </div>
    <p className="text-lg text-gray-600 mb-8">
      Our platform provides a comprehensive view of your business performance, helping you make data-driven decisions.
    </p>
    <button
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
    >
      Get Started
    </button>
  </section>

    <footer className="max-w-md mx-auto mb-24">
        <p className="text-sm text-gray-500 mb-4">
          &copy; 2024 Business Analytics. All rights reserved.
        </p>
        <ul className="flex flex-wrap mb-4">
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
      </footer>
    </main>
  );
}
