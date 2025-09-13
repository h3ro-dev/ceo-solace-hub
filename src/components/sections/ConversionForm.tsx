import { useState } from "react"
import { CTAButton } from "@/components/ui/cta-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Lock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export const ConversionForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Thank you for reaching out",
      description: "We'll be in touch within 24 hours. You're not alone anymore.",
    })
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', challenge: '' })
  }

  const challenges = [
    "I can't turn my brain off - everything is always my problem",
    "I make all the decisions but have no one to talk through them with", 
    "I'm working 80+ hours but the business isn't growing like it should",
    "The weight of everyone depending on me is crushing",
    "I feel like I'm pretending to know what I'm doing"
  ]

  return (
    <section id="conversion-form" className="pain-gradient py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-heading text-3xl md:text-4xl font-bold mb-6">
            Get Your First Night of <span className="text-cta">Real Sleep</span> in Months
          </h2>
          <p className="text-body text-xl text-muted-foreground">
            Free consultation where someone finally understands what you're going through
          </p>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-lg border border-border shadow-deep">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-body font-medium text-foreground">
                What should we call you?
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your first name"
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-body font-medium text-foreground">
                Where can we reach you when you need us?
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-body font-medium text-foreground">
                What's the name of what you're building alone?
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                placeholder="Your company name"
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="challenge" className="text-body font-medium text-foreground">
                What's your biggest challenge right now?
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, challenge: value})}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Select what resonates most with you" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {challenges.map((challenge, index) => (
                    <SelectItem key={index} value={challenge} className="text-body">
                      {challenge}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <CTAButton 
              type="submit" 
              variant="cta" 
              size="xl" 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : "Finally Get the Support I Deserve"}
            </CTAButton>
          </form>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4" />
            <p className="text-body text-sm">
              This conversation stays between us. No judgment, just understanding.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-cta/10 p-6 rounded-lg border border-cta/20 shadow-card">
            <h3 className="text-heading text-xl font-bold mb-2 text-foreground">
              You've been carrying this alone long enough
            </h3>
            <p className="text-body text-muted-foreground">
              Every day you wait is another day of unnecessary isolation.<br/>
              <strong className="text-cta">Limited spots available for people ready to stop going it alone.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}