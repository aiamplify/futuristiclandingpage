import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Bot,
  Brain,
  Clock,
  Zap,
  Network,
  Heart,
  ChevronRight,
} from 'lucide-react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-1000 ${
          heroInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
                A.I. Amplify Chatbots
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Revolutionizing Customer Interaction with Next-Gen AI
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                  />
                  {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                </div>
                <Button type="submit" isLoading={isLoading}>
                  Get Early Access <ChevronRight className="inline ml-2" />
                </Button>
              </form>
            </div>
            <div className="animate-float">
              <img
                src="https://images.unsplash.com/photo-1676299081847-824916de030a"
                alt="AI Visualization"
                className="rounded-lg glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Quantum-Powered Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              Icon={Clock}
              title="24/7 Omni-channel Support"
              description="Always-on AI assistance across all your communication channels"
            />
            <FeatureCard
              Icon={Zap}
              title="Quantum-speed Resolution"
              description="Lightning-fast response times powered by quantum computing"
            />
            <FeatureCard
              Icon={Brain}
              title="Adaptive Learning"
              description="Self-improving AI that gets smarter with every interaction"
            />
            <FeatureCard
              Icon={Network}
              title="Seamless Integration"
              description="Effortlessly connects with your existing systems"
            />
            <FeatureCard
              Icon={Bot}
              title="Advanced NLP"
              description="Human-like understanding of context and intent"
            />
            <FeatureCard
              Icon={Heart}
              title="Emotion Recognition"
              description="Understands and responds to customer sentiment"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <TestimonialCard
              name="Sarah Chen"
              role="CTO"
              company="TechForward"
              content="A.I. Amplify has transformed our customer service operations. The quantum-speed response times are incredible!"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />
            <TestimonialCard
              name="Michael Rodriguez"
              role="Head of Innovation"
              company="FutureScale"
              content="The adaptive learning capabilities have reduced our response time by 80%. Simply amazing!"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            />
            <TestimonialCard
              name="Emily Watson"
              role="Customer Success"
              company="CloudPeak"
              content="Our customer satisfaction scores have increased by 45% since implementing A.I. Amplify."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />
          </div>
          <div className="flex justify-center space-x-12 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
              alt="Partner Logo"
              className="h-12 grayscale"
            />
            <img
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
              alt="Partner Logo"
              className="h-12 grayscale"
            />
            <img
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb"
              alt="Partner Logo"
              className="h-12 grayscale"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="gradient-border">
            <div className="p-12">
              <h2 className="text-4xl font-bold mb-6 glow-text">
                Join the Quantum Revolution
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Be among the first to experience the future of AI-powered customer
                service. Early adopters get 50% off for life!
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                  />
                  <Button type="submit" isLoading={isLoading}>
                    Subscribe
                  </Button>
                </div>
                {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        <p>© 2024 A.I. Amplify Chatbots. Quantum Conversations, Infinite Possibilities.</p>
      </footer>
    </div>
  );
}

export default App;