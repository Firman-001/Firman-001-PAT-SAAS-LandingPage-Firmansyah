import React from "react";

class Kontak extends React.Component {
  state = {
    slideIndex: 0,
  };

  showSlide = (index) => {
    const slides = document.querySelectorAll(".slider-card");
    if (index >= slides.length) {
      index = 0;
    }
    if (index < 0) {
      index = slides.length - 1;
    }
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[index].style.display = "flex";
    this.setState({ slideIndex: index });
  };

  componentDidMount() {
    this.showSlide(this.state.slideIndex);
  }

  render() {
    return (
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 mt-10">
            {/* Column 1: Slider */}
            <div className="bg-gray-300 text-black rounded-lg p-6">
              <div className="relative">
                <div className="flex overflow-x-auto">
                  <div className="flex-none w-64 p-4 slider-card">
                    <div id="card1" className="flex flex-col items-center bg-gray-300 mt-10">
                      <div className="flex flex-col items-center space-y-4 pt-20">
                        <img
                          className="w-24 h-24 rounded-full"
                          src="https://via.placeholder.com/800x400"
                          alt="avatar"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">Avatar 1</h3>
                          <p className="text-lg mt-4">
                            Ini adalah teks paragraf untuk kolom pertama. Anda dapat menambahkan lebih banyak konten di sini.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none w-64 p-4 slider-card">
                    <div id="card2" className="flex flex-col items-center bg-gray-300 mt-10">
                      <div className="flex flex-col items-center space-y-4 pt-20">
                        <img
                          className="w-24 h-24 rounded-full"
                          src="https://via.placeholder.com/800x400"
                          alt="avatar"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">Avatar 2</h3>
                          <p className="text-lg mt-4">
                            Ini adalah teks paragraf untuk kolom kedua. Anda dapat menambahkan lebih banyak konten di sini.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none w-64 p-4 slider-card">
                    <div id="card3" className="flex flex-col items-center bg-gray-300 mt-10">
                      <div className="flex flex-col items-center space-y-4 pt-20">
                        <img
                          className="w-24 h-24 rounded-full"
                          src="https://via.placeholder.com/800x400"
                          alt="avatar"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">Avatar 3</h3>
                          <p className="text-lg mt-4">
                            Ini adalah teks paragraf untuk kolom ketiga. Anda dapat menambahkan lebih banyak konten di sini.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  id="prevButton"
                  className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  onClick={() => this.showSlide(this.state.slideIndex - 1)}
                >
                  &#10094;
                </button>
                <button
                  id="nextButton"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2"
                  onClick={() => this.showSlide(this.state.slideIndex + 1)}
                >
                  &#10095;
                </button>
              </div>
            </div>
            {/* Column 2: Form */}
            <div className="bg-gray-300 text-black rounded-lg p-6 w-full">
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
