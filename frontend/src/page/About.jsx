import React from 'react';
import { ArrowRight, Users, BookOpen, MessageCircle, Zap, Shield, Brain, Award, Heart, Target, Lightbulb, Globe } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Real Skill Exchange",
      description: "Offer what you know, learn what you don't. From 'Teach me Python, I'll help you with graphics' to 'I'll write content if you teach me design' — this is learning, humanized."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Hands-On Learning",
      description: "No more one-way webinars. Our platform supports bootcamps, resource sharing, and post-session connections — so learning doesn't stop at the signup form."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Always Stay Connected",
      description: "Attended a session? You'll always get the slides, presentation decks, and a direct line to the mentor if they opt in."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Built on Google Tech",
      description: "From Firebase Auth to Vertex AI for smart matching, we're backed by scalable, secure technology."
    }
  ];

  const keyFeatures = [
    {
      icon: <ArrowRight className="w-5 h-5" />,
      title: "Skill Exchange",
      description: "Post what you can teach and what you want to learn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "User Profiles",
      description: "Showcase your skills, portfolio, and past exchanges"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Resource Vault",
      description: "Get session decks and resources from events you've attended"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI Skill Matcher",
      description: "Smart recommendations powered by Vertex AI (Coming Soon)"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Built-in Chat",
      description: "Connect directly with mentors or learners after each session"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Bootcamps & Certs",
      description: "Host hands-on events that reward participation with experience and proof"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-600 mb-6">
              <Zap className="w-4 h-4 text-[#0b1d51]" />
              Empowering Learners. One Skill at a Time.
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Empowering Learners.<br />
              <span className="text-[#0b1d51]">One Skill at a Time.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              At UpLynk, we believe that knowledge shouldn't come with a price tag — just purpose. We're building a space where students, creators, and professionals can exchange skills, learn together, and grow as a community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0b1d51] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a1842] transition-colors flex items-center gap-2 justify-center">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#0b1d51] text-[#0b1d51] px-8 py-4 rounded-lg font-semibold hover:bg-[#0b1d51] hover:text-white transition-colors">
                Explore Skill Exchanges
              </button>
            </div>
          </div>
          <div className="mt-12 relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0b1d51] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Connect</div>
                    <div className="text-sm text-slate-600">Find your learning partner</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0b1d51] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Exchange</div>
                    <div className="text-sm text-slate-600">Trade skills seamlessly</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0b1d51] rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Grow</div>
                    <div className="text-sm text-slate-600">Build your expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 text-sm font-medium text-green-700 mb-6">
            <Target className="w-4 h-4" />
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Democratizing Learning Through Human Connection
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We aim to democratize learning by connecting people based on what they can teach and what they want to learn. Whether it's design for code, or SEO for marketing, Uplynk helps you grow through real human collaboration — not algorithms.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <BookOpen className="w-4 h-4" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Born from Frustration, Built for Connection
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The idea for UpLynk began with a simple frustration: attending amazing sessions but having no access to slides, no connection to speakers, and no way to follow up.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We realized that what most learners need isn't just a talk — it's <strong className="text-[#0b1d51]">access, continuity, and connection</strong>. So we built a platform where you can exchange skills, save resources, and stay in touch with mentors and peers — even after the session ends.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
              <div className="w-12 h-12 bg-[#0b1d51] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Learning should be human</div>
                <div className="text-sm text-slate-600">Connection over consumption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-6">
              <Lightbulb className="w-4 h-4" />
              What Makes Us Different
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Learning Reimagined for the Digital Age
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#0b1d51] rounded-lg flex items-center justify-center mb-6">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 text-sm font-medium text-orange-700 mb-6">
              <Globe className="w-4 h-4" />
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Everything You Need to Learn and Teach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-[#0b1d51] rounded-lg flex items-center justify-center mb-4">
                  {React.cloneElement(feature.icon, { className: "w-5 h-5 text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#0b1d51]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Movement. Share, Learn, Grow.
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Whether you're here to teach, learn, or just explore, UpLynk is your home for meaningful peer-to-peer learning. We're building the future of community-driven education — and you're invited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0b1d51] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              Create Your Profile
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0b1d51] transition-colors">
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}