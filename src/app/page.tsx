import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero 섹션 */}
      <section className="min-h-[85vh] relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-green-900 dark:via-gray-800 dark:to-green-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="container mx-auto px-6 min-h-[85vh] flex items-center pb-8">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-primary dark:text-primary-light">Web Developer</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                안녕하세요!<br />
                프론트엔드 개발자입니다
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                사용자 중심의 웹 개발을 추구하며, 최신 기술과 창의적인 문제 해결 능력으로
                효율적이고 확장 가능한 웹 애플리케이션을 구축합니다.
              </p>
              <div className="flex gap-6 pt-8">
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  포트폴리오 보기
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary transition-all transform hover:translate-y-[-2px]"
                >
                  연락하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About 섹션 */}
      <section id="about" className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Career Path
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: '2023',
                  title: '프로젝트 A',
                  description: '대규모 웹 애플리케이션 개발 및 배포'
                },
                {
                  year: '2022',
                  title: '프로젝트 B',
                  description: '반응형 웹사이트 디자인 및 구현'
                },
                {
                  year: '2021',
                  title: '프로젝트 C',
                  description: '사용자 경험 개선 프로젝트 진행'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-primary font-bold text-xl">{item.year}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills 섹션 */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Node.js',
              'JavaScript',
              'HTML/CSS',
              'Git',
              'AWS'
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact 섹션 */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Contact Me
          </h2>
          <div className="max-w-xl mx-auto text-center">
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                000-0000-0000
              </p>
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@mail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
