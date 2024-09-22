import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-[30px] mt-[100px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Bagian Contact Us di kiri */}
        <div className="text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-teal-400">Contact Us</h2>
          <p className="mb-2">Email: <a href="mailto:contact@yourcompany.com" className="text-teal-200">ardhi.fadhilah30@gmail.com</a></p>
          <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-teal-200">+62 851 7989 2630</a></p>
          <p>WhatsApp: <a href="https://wa.me/+6285179892630" className="text-teal-200">Chat with us</a></p>
        </div>

        {/* Link Sosial Media di tengah */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Facebook</a>
          <a href="https://github.com/fdhlah30" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Github</a>
          <a href="https://instagram.com/fdhlah30" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Instagram</a>
          <a href="https://www.linkedin.com/in/fadhilah-ardhiansyah" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">LinkedIn</a>
        </div>
      </div>

      {/* Garis pemisah */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Hak cipta di bagian bawah */}
      <div className="container mx-auto text-center mt-6">
        <p className="text-gray-500">© 2024 Fadhilah Ardhiansyah. All rights reserved.</p>
      </div>
    </footer>
  );
}
