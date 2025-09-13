import { CTAButton } from "@/components/ui/cta-button"
import heroImage from "@/assets/hero-ceo-isolation.jpg"

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Every Decision Is <span className="text-cta">Yours</span>.<br/>
              Every Problem Is <span className="text-cta">Yours</span>.<br/>
              Every Sleepless Night Is <span className="text-cta">Yours</span>.
            </h1>
            
            <h2 className="text-body text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              The isolation of being a CEO of One is eating you alive. 
              <br className="hidden md:block"/>
              <strong className="text-foreground">You don't have to carry this alone.</strong>
            </h2>
            
            <div className="bg-card/50 p-6 rounded-lg border border-border shadow-card">
              <p className="text-body text-lg text-muted-foreground italic">
                "When was the last time you had someone to share the real burden with?"
              </p>
            </div>
            
            <CTAButton 
              variant="cta" 
              size="xl" 
              onClick={scrollToForm}
              className="w-full lg:w-auto"
            >
              Finally Get the Support I Deserve
            </CTAButton>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="shadow-deep rounded-lg overflow-hidden">
              <img 
                src={heroImage} 
                alt="Solo entrepreneur overwhelmed by the weight of responsibility, sitting alone in a dark office" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}