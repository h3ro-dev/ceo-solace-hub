import { CheckCircle, Zap, Clock } from "lucide-react"

export const SolutionSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Imagine having a team of experts who understand the weight you carry",
      description: "No more explaining why you're stressed. We get it."
    },
    {
      icon: Zap,
      title: "Picture making decisions with confidence instead of constant second-guessing",
      description: "Clear frameworks and support for every major choice you face."
    },
    {
      icon: Clock,
      title: "Feel the relief of knowing you're not the only one everything depends on",
      description: "Distributed intelligence that works even when you're not."
    }
  ]

  return (
    <section className="hero-gradient py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-heading text-3xl md:text-4xl font-bold mb-8">
          What If You Never Had to Feel <span className="text-cta">This Alone</span> Again?
        </h2>
        
        <div className="space-y-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card/60 backdrop-blur-sm p-8 rounded-lg border border-border shadow-card text-left transition-emotional hover:shadow-lg hover:bg-card/80">
              <div className="flex items-start gap-6">
                <div className="bg-cta/20 p-4 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-cta" />
                </div>
                <div>
                  <h3 className="text-heading text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-body text-muted-foreground text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 shadow-deep">
          <h3 className="text-heading text-2xl font-bold mb-4 text-foreground">
            Not just tools. Not just software.
          </h3>
          <p className="text-body text-xl text-muted-foreground">
            <strong className="text-cta">A support system that never sleeps, never judges, never gets tired of your questions.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}