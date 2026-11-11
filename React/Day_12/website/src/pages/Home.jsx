const Home = () => {
  return (
    <div className="text-center">

      <h1 className="text-5xl md:text-7xl font-extrabold text-green-900 mt-5">
        My Diwali Story
      </h1>

    

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 mt-10">
        <div className="text-6xl text-center mb-5"></div>

        <p className="text-lg text-center leading-8 text-gray-600">
          During Diwali, our family had many agricultural and land-related
          responsibilities. Instead of spending the days only on celebrations,
          we spent time taking care of our work. Every responsibility reminded
          me of the importance of hard work and family support.
        </p>
      </div>

      <section className="py-16 px-6 md:px-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-5 bg-green-200 p-3 rounded-2xl w-fit mx-auto">
          My Diwali Timeline 🕯️
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">

          <div className="flex gap-5 items-start">

            <div className="bg-white shadow p-6 rounded-2xl flex-1">
              <h3 className="text-xl font-bold text-green-800">
                 A Normal Day
              </h3>

              <p className="text-gray-600 mt-2">
                Continued my regular activities and helped with our land work.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
    

            <div className="bg-white shadow p-6 rounded-2xl flex-1">
              <h3 className="text-xl font-bold text-green-800">
                  Family Responsibilities
              </h3>

              <p className="text-gray-600 mt-2">
                Spent time with my parents and brother while working together.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">
    

            <div className="bg-white shadow p-6 rounded-2xl flex-1">
              <h3 className="text-xl font-bold text-green-800">
                My Study Time
              </h3>

              <p className="text-gray-600 mt-2">
                Attended online classes and completed my assigned tasks.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start">

            <div className="bg-white shadow p-6 rounded-2xl flex-1">
              <h3 className="text-xl font-bold text-green-800">
                Our Happy Moments
              </h3>

              <p className="text-gray-600 mt-2">
                Enjoyed the little moments with my family. Our teamwork made
                those days memorable.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home