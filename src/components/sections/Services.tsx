import { Code, Smartphone, Database, Zap } from "lucide-react";

export function Services() {
  return (
    <section id="skills" className="relative py-20 bg-secondary/30 overflow-hidden">
      {/* Blur effect circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">My Expertise</h2>
          <p className="mt-4 text-muted-foreground">
            Areas where I excel and can help bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Mobile Development */}
          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
            <p className="text-muted-foreground">
              Native and cross-platform mobile apps using Flutter, React Native, Kotlin, Swift, and more.
            </p>
          </div>
          
          {/* Frontend Development */}
          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-muted-foreground">
              Responsive, intuitive web interfaces built with modern technologies like React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          
          {/* Backend Development */}
          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
            <p className="text-muted-foreground">
              Robust APIs and server-side solutions using Node.js, Express, and SQL/NoSQL databases.
            </p>
          </div>
          
          {/* DevOps & CI/CD */}
          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">DevOps & CI/CD</h3>
            <p className="text-muted-foreground">
              Streamlined deployment processes, cloud infrastructure, and continuous integration/deployment pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}