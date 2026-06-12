import "./app.css";

function App() {
  const steps = [
    {
      title: "Set Up the React Project",
      desc: "Start by setting up a new ReactJS project using create-react-app or your preferred method."
    },
    {
      title: "Create a Navigation Bar",
      desc: "Build a navigation bar that allows users to navigate between different sections."
    },
    {
      title: "Home Section",
      desc: "Design a hero section that introduces yourself."
    },
    {
      title: "Projects Section",
      desc: "Showcase your projects with descriptions and links."
    },
    {
      title: "Skills Section",
      desc: "Display your technical skills and tools."
    },
    {
      title: "Contact Section",
      desc: "Create a contact form for visitors."
    }
  ];

  return (
    <div className="container">
      <div className="timeline">
        {steps.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="number">{index + 1}</div>

            <div className="content">
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
