import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: '포트폴리오 웹사이트',
      description: 'Next.js와 Tailwind CSS를 활용한 반응형 포트폴리오 웹사이트입니다.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      image: '/project1.jpg',
      github: '#',
      demo: '#'
    },
    {
      title: '프로젝트 2',
      description: '프로젝트에 대한 상세한 설명을 입력해주세요.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/project2.jpg',
      github: '#',
      demo: '#'
    },
    {
      title: '프로젝트 3',
      description: '프로젝트에 대한 상세한 설명을 입력해주세요.',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      image: '/project3.jpg',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">이미지 준비중</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-primary hover:text-blue-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-primary hover:text-blue-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 