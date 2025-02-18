import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Button/Footer/Footer';
import ExamPage from './ExamPage';

function Home() {
  return (
    <div className="text-center p-10 bg-gray-100 min-h-screen">
      <Header/>
      <h1 className="text-5xl font-bold text-gray-700 mt-15 mb-5">Welcome to Exam.mn</h1>
      <p className="text-xl text-gray-600 mb-10">
        Take your exams easily and efficiently with Exam.mn.
      </p>
      <div>
        <a
          href="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition"
        >
          Get Started
        </a>

        <ExamPage/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
