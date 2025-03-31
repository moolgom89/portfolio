const Skills = () => {
  const skills = [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'JavaScript',
    'HTML/CSS',
    'Git'
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-medium text-gray-800 dark:text-white">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 