import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Tentang WorldUniversity</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Deskripsi Platform</h2>
        <p className="text-lg">
          WorldUniversity adalah platform inovatif yang dikembangkan oleh PT World University untuk membantu mahasiswa mendapatkan informasi mendalam tentang berbagai negara di seluruh dunia. Dengan antarmuka yang ramah pengguna, kami menyediakan data lengkap tentang negara, termasuk bendera, lokasi, dan berbagai informasi penting lainnya.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Visi dan Misi</h2>
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Visi</h3>
          <p className="text-lg">
            Menjadi platform global terdepan yang memfasilitasi pendidikan dan pengetahuan tentang negara-negara di dunia, mempermudah akses informasi dan meningkatkan kesadaran global di kalangan mahasiswa.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Misi</h3>
          <p className="text-lg">
            1. Menyediakan data negara yang akurat dan terkini. <br />
            2. Meningkatkan pemahaman global mahasiswa melalui informasi yang mudah diakses. <br />
            3. Mendorong eksplorasi dan penelitian tentang berbagai negara dan budaya.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-2">Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Anggota Tim 1" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center">Nama Anggota 1</h3>
            <p className="text-center text-gray-600">Deskripsi singkat tentang peran dan kontribusi anggota tim ini dalam pengembangan platform.</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Anggota Tim 2" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center">Nama Anggota 2</h3>
            <p className="text-center text-gray-600">Deskripsi singkat tentang peran dan kontribusi anggota tim ini dalam pengembangan platform.</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Anggota Tim 3" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center">Nama Anggota 3</h3>
            <p className="text-center text-gray-600">Deskripsi singkat tentang peran dan kontribusi anggota tim ini dalam pengembangan platform.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
