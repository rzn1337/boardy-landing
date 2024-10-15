const Features = () => {
  const features = [
    {
      title: "Real-Time Collaboration",
      description: "Work with your team on the same whiteboard simultaneously, making brainstorming and planning smoother.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
        </svg>
      )
    },
    {
      title: "Infinite Canvas",
      description: "A limitless whiteboard for brainstorming, planning, and developing ideas without boundaries.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      )
    },
    {
      title: "Integrations",
      description: "Seamlessly integrate with Google Drive, Slack, and other popular tools for smoother workflow.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      )
    },
    {
      title: "Interactive Tools",
      description: "Draw, write, and use sticky notes to bring your ideas to life in real-time with easy-to-use tools.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features That Make Collaboration Effortless</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="text-orange-600 mb-4">{feature.icon}</div>
              <h3 className="text-black text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
