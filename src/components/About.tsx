const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                안녕하세요! 저는 웹 개발자입니다. 사용자 경험을 중요시하며,
                최신 기술 트렌드를 따라가며 지속적으로 성장하고 있습니다.
              </p>
              <p className="mb-4">
                Next.js, React, TypeScript 등의 최신 기술을 활용하여
                효율적이고 확장 가능한 웹 애플리케이션을 개발하는 것을 좋아합니다.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  주요 특징
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>사용자 중심의 인터페이스 설계</li>
                  <li>반응형 웹 디자인 구현</li>
                  <li>최신 웹 기술 활용</li>
                  <li>성능 최적화 및 웹 표준 준수</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 