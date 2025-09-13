import { Shield, MessageSquare, Trophy, Heart } from "lucide-react"

export const IsolationSection = () => {
  const isolationPoints = [
    {
      icon: Shield,
      text: "Board meetings where you pretend everything's fine while drowning inside"
    },
    {
      icon: MessageSquare,
      text: "Making life-changing decisions with no one to bounce ideas off"
    },
    {
      icon: Trophy,
      text: "Celebrating wins alone because no one understands what they really cost"
    },
    {
      icon: Heart,
      text: "The weight of everyone depending on you, but no one supporting you"
    }
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-heading text-3xl md:text-4xl font-bold mb-6">
            The <span className="text-cta">Loneliest Job</span> in the World
          </h2>
          <p className="text-body text-xl text-muted-foreground">
            Raw truth about CEO isolation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {isolationPoints.map((point, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border shadow-card transition-emotional hover:shadow-lg hover:border-cta/30">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                  <point.icon className="w-5 h-5 text-cta" />
                </div>
                <p className="text-body text-foreground font-medium">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-card to-primary/5 p-8 rounded-lg border border-border shadow-deep text-center">
          <h3 className="text-heading text-2xl font-bold mb-4 text-foreground">
            Look around your office right now.
          </h3>
          <p className="text-body text-lg text-muted-foreground">
            Who's there to help carry the load?<br/>
            <strong className="text-cta">That empty chair is the problem.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}