const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          안녕하세요! <span className="text-primary">웹 개발자</span> 입니다 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          창의적인 문제 해결과 사용자 중심의 웹 애플리케이션 개발에 열정을 가진 
          프론트엔드 개발자입니다.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border-2 border-gray-200 hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full text-lg font-medium transition-colors dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
          >
            프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 