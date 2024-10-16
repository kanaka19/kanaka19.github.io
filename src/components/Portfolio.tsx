import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Virtual Pet</h3>
          <p className="text-gray-700 mb-4">
            Developed a full-stack web application for managing virtual pets,
            allowing users to admit, adopt, feed, and perform other maintenance
            activities for organic pets.
          </p>
          <a
            href="https://github.com/WeCanCodeIT/virtual-pet-react-super-awesome"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Virtual Day Care</h3>
          <p className="text-gray-700 mb-4">
            Developed a full-stack web application simulating a virtual daycare
            where users can adopt and care for virtual kids.
          </p>
          <a
            href="https://github.com/kanaka19/project2"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Arcade - Dayz</h3>
          <p className="text-gray-700 mb-4">
            Created a multi-feature arcade game application providing a variety
            of classic arcade games. We wanted to create an application that
            hosts a variety of games. Our purpose was to make retro games more
            accessible to the next generation, while also adding in some new
            ones.
          </p>
          <a
            href="https://github.com/WeCanCodeIT/arcade-dayz-team-super-awesome"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
