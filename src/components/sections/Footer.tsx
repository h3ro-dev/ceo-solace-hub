import { Shield, Heart, Users } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-card py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-heading text-2xl font-bold mb-4 text-foreground">
            Powered by Utlyze
          </h3>
          <p className="text-body text-lg text-muted-foreground">
            Supporting the ones who support everyone else
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-cta/20 p-4 rounded-lg w-fit mx-auto mb-4">
              <Shield className="w-8 h-8 text-cta" />
            </div>
            <h4 className="text-heading font-semibold mb-2 text-foreground">
              Confidential & Secure
            </h4>
            <p className="text-body text-sm text-muted-foreground">
              Your conversations and struggles stay completely private
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-cta/20 p-4 rounded-lg w-fit mx-auto mb-4">
              <Heart className="w-8 h-8 text-cta" />
            </div>
            <h4 className="text-heading font-semibold mb-2 text-foreground">
              Built with Understanding
            </h4>
            <p className="text-body text-sm text-muted-foreground">
              Created by entrepreneurs who've been exactly where you are
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-cta/20 p-4 rounded-lg w-fit mx-auto mb-4">
              <Users className="w-8 h-8 text-cta" />
            </div>
            <h4 className="text-heading font-semibold mb-2 text-foreground">
              Never Alone Again
            </h4>
            <p className="text-body text-sm text-muted-foreground">
              Join a community that truly understands the weight you carry
            </p>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Utlyze. Supporting entrepreneurs who support everyone else.</p>
        </div>
      </div>
    </footer>
  )
}