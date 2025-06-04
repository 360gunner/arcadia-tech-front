
import React from 'react';

const Technologies = () => {
  const techStacks = [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Flutter"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET", "Microservices"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Oracle", "MySQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Security",
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "Encryption", "GDPR", "PCI DSS"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Integration",
      technologies: ["REST APIs", "GraphQL", "gRPC", "Message Queues", "ESB", "Webhooks"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="technologies" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technologies
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {" "}We Master
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stay at the cutting edge of technology to deliver solutions that are not just 
            current, but future-ready. Our expertise spans the entire technology stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${stack.color} rounded-full mb-6`}></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {stack.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-50 rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Enterprise Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-600">
              <div className="font-medium">AWS Certified</div>
              <div className="font-medium">Azure Certified</div>
              <div className="font-medium">ISO 27001</div>
              <div className="font-medium">SOC 2 Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
