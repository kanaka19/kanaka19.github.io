import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        GitHub: <a href="https://kanaka19.github.io" className="text-blue-500">https://kanaka19.github.io</a><br />
        LinkedIn: <a href="https://www.linkedin.com/in/kanaka-meier-b431a2129" className="text-blue-500">https://www.linkedin.com/in/kanaka-meier-b431a2129</a>
      </p>
    </div>
  );
};

export default Contact;
