import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, Database, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-subtle border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="p-8 mb-8 bg-gradient-subtle border-border/50">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Privacy Matters</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At Calendar Journal, we believe your thoughts and memories are deeply personal. 
                This privacy policy explains how we protect and respect your privacy.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: January 2024
              </p>
            </div>
          </Card>

          {/* Privacy Principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private by Design</h3>
              <p className="text-muted-foreground">Your journal entries are encrypted and stored securely on your device.</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Reading</h3>
              <p className="text-muted-foreground">We never read, analyze, or share your personal journal content.</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
              <Database className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Minimal Data</h3>
              <p className="text-muted-foreground">We collect only what's necessary to provide our service.</p>
            </Card>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Journal Content</h3>
                  <p>Your journal entries, voice memos, and mood data are stored locally on your device and in your personal iCloud/Google Drive backup (if enabled). We do not have access to this content.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Usage Analytics</h3>
                  <p>We collect anonymous usage statistics to improve the app, such as which features are used most often. This data cannot be linked back to your identity or journal content.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Crash Reports</h3>
                  <p>If the app crashes, we may receive anonymous crash reports to help us fix bugs. These reports never contain your journal content.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                How We Protect Your Data
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Local Storage</h3>
                  <p>All your journal entries are stored locally on your device using iOS/Android secure storage mechanisms.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Encryption</h3>
                  <p>Your data is encrypted both at rest and in transit. Even if someone gains access to your device backup, your journal content remains protected.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Cloud Storage</h3>
                  <p>We don't store your journal content on our servers. Your privacy is maintained by keeping your data on your devices.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Data Sharing
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">We do not sell, trade, or share your personal information with third parties.</p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Service Providers</h3>
                  <p>We may use trusted service providers for app analytics and crash reporting. These providers are bound by strict privacy agreements and cannot access your journal content.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Legal Requirements</h3>
                  <p>We may disclose information only if required by law, but since we don't store your journal content, there's nothing personal to disclose.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Your Rights
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Access and Control</h3>
                  <p>You have complete control over your data. You can export, delete, or modify your journal entries at any time within the app.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data Portability</h3>
                  <p>You can export your journal entries in multiple formats (PDF, text) to move your data to another service if desired.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Deletion</h3>
                  <p>Deleting the app removes all your data from your device. We cannot recover deleted data since we don't store it on our servers.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Contact Us
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>If you have any questions about this privacy policy or our practices, please contact us:</p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@calendarjournal.app</p>
                  <p><strong>Subject:</strong> Privacy Policy Question</p>
                </div>
                <p>We're committed to addressing your privacy concerns and will respond within 48 hours.</p>
              </div>
            </Card>
          </div>

          {/* Footer CTA */}
          <Card className="p-8 mt-12 bg-gradient-subtle text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Privacy-First Journaling</h3>
            <p className="text-muted-foreground mb-6">
              Experience the peace of mind that comes with truly private journaling.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/">
                Start Journaling Privately
              </Link>
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;