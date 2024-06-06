import React from "react";

class Card extends React.Component {
    render() {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-gray-100 text-black rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">Ruang Kelas</h2>
            <img
              src="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg"
              alt="Placeholder"
              className="w-full h-auto mb-4"
            />
            <p className="text-lg text-justify">
              Ini adalah teks paragraf untuk kolom pertama. Anda dapat menambahkan lebih banyak konten di sini.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="bg-gray-100 text-black rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">Masjid dan Aula</h2>
            <img
              src="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg "
              alt="Placeholder"
              className="w-full h-auto mb-4"
            />
            <p className="text-lg text-justify">
              Ini adalah teks paragraf untuk kolom kedua. Anda dapat menambahkan lebih banyak konten di sini.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-gray-100 text-black rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">Gedung Asrama</h2>
            <img
              src="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg"
              alt="Placeholder"
              className="w-full h-auto mb-4"
            />
            <p className="text-lg text-justify">
              Ini adalah teks paragraf untuk kolom ketiga. Anda dapat menambahkan lebih banyak konten di sini.
            </p>
          </div>
        </div>
      );
    }
}

class Home extends React.Component {
  render() {
    return (
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-black rounded-lg p-6 mt-6">
              <h2 className="text-8xl font-semibold mb-4">SMK TI BAZMA </h2>
              <h2 className="text-5xl font-semibold mb-4">
                Islamic Boarding School
              </h2>
              <p className="text-lg text-justify">
                Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan
                bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas
                maupun operasional didanai dari hasil pengelolaan wakaf dan
                sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh
                masyarakat. SMK TI BAZMA menyelenggarakan program pembelajaran
                yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal
                dari berbagai daerah di seluruh Indonesia. SMK TI Bazma
                menyelenggarakan pendidikan dengan jurusan SIJA (Sistem
                Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum
                berbasis asrama.
              </p>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Tombol
                </span>
              </button>
            </div>
            <div className="bg-gray-800 text-white rounded-lg p-6 mt-10">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <Card />
      </div>
    );
  }
}

export default Home;
