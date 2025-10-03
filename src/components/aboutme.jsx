

export default function AboutMe() {
  return (
   <section id="aboutme" className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-10">
            <h2 className="text-3xl font-bold mb-4 text-center text-underline font-quantico under">About Me</h2>
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-quantico">Bio</h3>
              <p className="text-sm leading-relaxed font-mono mb-3">
                Hi! I'm Novellina Edyawati,
                a 3rd year Computer Science undergraduate at Binus University. I am
                a passionate Data Scientist and Software Engineer with a knack for transforming
                complex data into actionable insights. With a strong foundation in statistics, machine learning
                , and programming, I thrive on solving challenging problems and building impactful solutions. My
                expertise spans various domains, including data analysis, predictive modeling, and software development.
                I enjoy collaborating with cross-functional teams to drive innovation and deliver value through data-driven decision-making.
                I have participated in several
                national and international competitions, where I gained valuable
                experience in teamwork, problem-solving, and critical thinking
                while developing solutions collaboratively. 
                I am excited to connect with like-minded professionals and explore
                opportunities to contribute my skills and expertise to impactful projects.
              </p>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-quantico">Education</h3>
              <p className="text-sm leading-relaxed font-mono mb-3">
                Bachelor of Computer Science, Binus University (2023 - Present)
                <br />
                Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning, Software Engineering
              </p>
              
              <p className="text-sm leading-relaxe font-mono mb-3">
                High School Diploma, SMA Trinitas Bandung (2020 - 2023)
              </p>
            </div>
            {/* Experience & Achievement */}
            <div>
              <h3 className="text-2xl font-semibold font-quantico mb-4">Experience & Achievement</h3>
              <ul className="list-disc list-inside text-sm leading-relaxed font-mono">
                <li>HERoes Inovation Competition (2025): Selected as Top 10 Finalist in the HERoes of Innovation competition organized by DOW</li>
                <li>Participant, Android Hackathon Slash National Competition 2024 – Fakultas Ilmu Komputer, UPN Veteran Jakarta (2024)</li>
                <li>Participant, Winaction 2024 Business Model Canvas Competition – Universitas Widyatama (2024)</li>
                <li>Participant, Varsity Hackathon 2024 – Universiti Sains Malaysia (2024)</li>
              </ul>
            </div>

            {/* Skills Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold font-quantico mb-4">Skills</h3>
              <ul className="list-disc list-inside text-sm leading-relaxed font-mono">
                <li>Programming Languages: Python, R, SQL, Java, C/C++</li>
                <li>Data Analysis & Visualization: Pandas, NumPy, Matplotlib, Seaborn, Tableau</li>
                <li>Machine Learning: Scikit-learn, TensorFlow, Keras</li>
                <li>Web Development: HTML, CSS, JavaScript, React</li>
                <li>Database Management: MySQL, PostgreSQL </li>
                <li>Version Control: Git, GitHub</li>
              </ul>
            </div>

            {/* Experience Section */}
            
          </div>
          {/* You might have a right column here, for example: */}
          <div className="md:col-span-1">
            {/* maybe an image or sidebar */}
          </div>
        </div>
      </section>
    ); 
}