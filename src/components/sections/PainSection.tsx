import { Clock, Brain, Users, TrendingDown } from "lucide-react"

export const PainSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "3 AM panic attacks about decisions only you can make",
      description: "The weight of every choice crushing down on you when the world is asleep."
    },
    {
      icon: TrendingDown,
      title: "Your family sees you stressed and exhausted, but the business still isn't growing",
      description: "Sacrificing everything important for a venture that demands more each day."
    },
    {
      icon: Users,
      title: "Friends stopped inviting you because work consumes everything",
      description: "Isolation becoming your default state as relationships fade into the background."
    },
    {
      icon: Brain,
      title: "Every 'success' feels hollow because there's no one who understands the real cost",
      description: "Achievements that should feel triumphant instead leaving you emptier than before."
    }
  ]

  return (
    <section className="pain-gradient py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-heading text-3xl md:text-4xl font-bold mb-6">
          The CEO of One Trap That's <span className="text-cta">Destroying Your Life</span>
        </h2>
        
        <div className="space-y-8 mb-12">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-card/40 p-6 rounded-lg border border-border shadow-card transition-emotional hover:shadow-lg">
              <div className="flex items-start gap-4 text-left">
                <div className="bg-cta/20 p-3 rounded-lg flex-shrink-0">
                  <point.icon className="w-6 h-6 text-cta" />
                </div>
                <div>
                  <h3 className="text-heading text-lg font-semibold mb-2 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-lg shadow-card">
          <h3 className="text-heading text-2xl font-bold mb-4 text-destructive">
            87% of solo entrepreneurs experience chronic isolation.<br/>
            72% report mental health struggles.
          </h3>
          <p className="text-body text-lg text-muted-foreground">
            <strong className="text-foreground">You're not weak. You're not failing.</strong><br/>
            You're just human carrying an inhuman load.
          </p>
        </div>
      </div>
    </section>
  )
}