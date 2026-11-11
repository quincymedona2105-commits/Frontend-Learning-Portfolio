import land1 from '../assets/land1.jpg'
import land2 from '../assets/land2.jpg'
import land3 from '../assets/land3.jpg'

const About = () => {
  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold text-center text-green-900 mb-10">
        About My Diwali 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-white p-5 rounded-2xl shadow-lg hover:scale-105 transition">
          <img
            src={land2}
            alt="My Land Memory 1"
            className="w-full h-72 object-cover rounded-xl"
          />
          <h2 className="text-2xl font-bold text-green-800 mt-4">
            Our Beautiful Land 🌾
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-lg hover:scale-105 transition">
          <img
            src={land1}
            alt="My Land Memory 2"
            className="w-full h-72 object-cover rounded-xl"
          />
          <h2 className="text-2xl font-bold text-green-800 mt-4">
            Family Responsibilities 
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-lg hover:scale-105 transition">
          <img
            src={land3}
            alt="My Land Memory 3"
            className="w-full h-72 object-cover rounded-xl"/>
          <h2 className="text-2xl font-bold text-green-800 mt-4">
            Beautiful Memories 🌱
          </h2>
        </div>

      </div>

    </div>
  )
}

export default About