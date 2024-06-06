import React from "react";

class Kontak extends React.Component {
  render() {
    return (
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="text-black rounded-lg p-6 mt-6 relative">
              <h2 className="text-8xl font-semibold mb-4">SMK TI BAZMA </h2>
              <h2 className="text-5xl font-semibold mb-4">
                Islamic Boarding School
              </h2>
              <div className="avatar-carousel">
                <div className="avatar-container">
                  <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src="https://via.placeholder.com/800x400"
                    alt="avatar"
                  />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-semibold">Avatar 1</h3>
                    <p className="text-lg mt-4">
                      Ini adalah teks paragraf untuk kolom pertama. Anda dapat
                      menambahkan lebih banyak konten di sini.
                    </p>
                  </div>
                </div>
                <div className="avatar-container hidden">
                  <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src="https://via.placeholder.com/800x400"
                    alt="avatar"
                  />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-semibold">Avatar 2</h3>
                    <p className="text-sm">Deskripsi avatar 2</p>  <p className="text-lg mt-4">
                      Ini adalah teks paragraf untuk kolom pertama. Anda dapat
                      menambahkan lebih banyak konten di sini.
                    </p>
                  </div>
                </div>
                <div className="avatar-container hidden">
                  <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src="https://via.placeholder.com/800x400"
                    alt="avatar"    
                  />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-semibold">Avatar 3</h3>
                    <p className="text-lg mt-4">
                      Ini adalah teks paragraf untuk kolom pertama. Anda dapat
                      menambahkan lebih banyak konten di sini.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-100 text-black rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-semibold mb-4">Form Input</h2>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your message here"
                  rows="4"
                ></textarea>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kontak;
