import React from 'react';

function ExamPage() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center text-gray-600 mb-10">Available Exams</h2>
      <ul className="space-y-4">
        <li className="p-5 border rounded-md shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Math Exam</h3>
          <p className="text-gray-500">Duration: 60 minutes</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">
            Start Exam
          </button>
        </li>
        <li className="p-5 border rounded-md shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Science Exam</h3>
          <p className="text-gray-500">Duration: 45 minutes</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">
            Start Exam
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ExamPage;
