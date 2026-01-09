const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-underline pb-4">
          About Me
        </h2>

        <div className="space-y-6 text-muted-foreground font-body leading-relaxed mt-8">
          <p className="text-lg">
            I’m a backend-focused software engineer with experience building and
            scaling production systems across cloud-native environments. I’ve
            worked with both startups and enterprise teams, delivering
            performance-critical APIs, distributed caching, event-driven
            services, and secure web applications.
          </p>

          <p>
            My work spans everything from optimizing backend response times and
            designing scalable REST architectures to building AI-powered tools
            and serverless systems used in real-world workflows. I care deeply
            about clean architecture, maintainable code, and solving problems
            that matter at scale.
          </p>

          <p>
            Outside of work, I enjoy building and shipping side projects,
            competing in hackathons, and exploring new technologies in cloud
            infrastructure, distributed systems, and AI. I’m always excited to
            collaborate with engineers who value ownership, impact, and
            continuous improvement.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Figma"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover-lift"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
