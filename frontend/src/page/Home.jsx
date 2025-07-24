import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  MessageSquare, 
  ArrowRight, 
  Calendar, 
  Upload, 
  Download, 
  Filter, 
  Search,
  Star,
  Clock,
  MapPin,
  Heart,
  Zap,
  Globe,
  Code,
  Palette,
  Music,
  Camera,
  Briefcase,
  ChevronRight,
  Play,
  User,
  MessageCircle,
  Share2,
  Award,
  Target,
  CheckCircle
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    { id: 'design', name: 'Design', icon: Palette, color: 'bg-purple-100 text-purple-600' },
    { id: 'code', name: 'Development', icon: Code, color: 'bg-blue-100 text-blue-600' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-green-100 text-green-600' },
    { id: 'photo', name: 'Photography', icon: Camera, color: 'bg-yellow-100 text-yellow-600' },
    { id: 'business', name: 'Business', icon: Briefcase, color: 'bg-red-100 text-red-600' },
  ];

  const upcomingEvents = [
    {
      title: 'React Hooks Deep Dive',
      host: 'Sarah Chen',
      date: 'March 15, 2025',
      time: '2:00 PM PST',
      level: 'Intermediate',
      attendees: 24,
      category: 'Development'
    },
    {
      title: 'UI/UX Design Principles',
      host: 'Mike Rodriguez',
      date: 'March 17, 2025',
      time: '10:00 AM PST',
      level: 'Beginner',
      attendees: 18,
      category: 'Design'
    },
    {
      title: 'Music Theory for Producers',
      host: 'Emma Thompson',
      date: 'March 20, 2025',
      time: '4:00 PM PST',
      level: 'Advanced',
      attendees: 12,
      category: 'Music'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Full Stack Developer',
      content: 'I exchanged music theory lessons for frontend help — best decision I made. The community is incredibly supportive!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Designer',
      content: 'The post-session notes are a life-saver. I can review everything at my own pace and the quality is amazing.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Marketing Specialist',
      content: 'This community gave me confidence to teach my first session! The feedback and support were overwhelming.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  const skillExchanges = [
    {
      type: 'offer',
      skill: 'React & TypeScript',
      user: 'Sarah Chen',
      level: 'Expert',
      format: '1:1 or Group',
      wants: 'UI/UX Design',
      timeAgo: '2 hours ago'
    },
    {
      type: 'need',
      skill: 'Photography Basics',
      user: 'Mike Rodriguez',
      level: 'Beginner',
      format: 'Group preferred',
      offers: 'Frontend Development',
      timeAgo: '4 hours ago'
    },
    {
      type: 'offer',
      skill: 'Music Production',
      user: 'Emma Thompson',
      level: 'Advanced',
      format: 'Async or Live',
      wants: 'Marketing Strategy',
      timeAgo: '1 day ago'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0b1d51] to-[#1a2b5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Swap Skills. Build Connections. 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Grow Together.
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join a vibrant community where you can learn new skills, share your knowledge, 
                and collaborate with like-minded creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#0b1d51] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Join the Community
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0b1d51] transition-colors flex items-center justify-center">
                  Post a Skill
                  <Zap className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl">
                    <Code className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-white font-semibold">Learn Code</h3>
                    <p className="text-blue-100 text-sm">React, TypeScript, Python</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl">
                    <Palette className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-white font-semibold">Share Design</h3>
                    <p className="text-purple-100 text-sm">UI/UX, Figma, Illustration</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-xl">
                    <Music className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-white font-semibold">Teach Music</h3>
                    <p className="text-green-100 text-sm">Theory, Production, Piano</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl">
                    <Camera className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-white font-semibold">Photography</h3>
                    <p className="text-orange-100 text-sm">Portrait, Landscape, Editing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Session Notes Hub */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d51] mb-4">
              Post-Session Notes Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep the learning going. Access shared presentations and notes after each session.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b1d51] mb-3">Upload Notes</h3>
              <p className="text-gray-600 mb-4">Share PDF, PPT, or Markdown notes with auto-tagging by topic and date.</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Upload Notes</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b1d51] mb-3">Download & Access</h3>
              <p className="text-gray-600 mb-4">Access and download shared notes from community sessions.</p>
              <div className="flex items-center text-green-600 font-medium">
                <span>Browse Notes</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Filter className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b1d51] mb-3">Filter & Search</h3>
              <p className="text-gray-600 mb-4">Find notes by category, skill, or session title with advanced filtering.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Search Notes</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h3 className="text-2xl font-semibold text-[#0b1d51] mb-4 sm:mb-0">Recent Notes</h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input 
                    type="text" 
                    placeholder="Search notes..." 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-[#0b1d51] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Upload Notes
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'React Hooks Masterclass', type: 'PDF', date: '2 days ago', downloads: 45 },
                { title: 'Design System Basics', type: 'PPT', date: '1 week ago', downloads: 32 },
                { title: 'Music Theory 101', type: 'Markdown', date: '3 days ago', downloads: 28 }
              ].map((note, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {note.type}
                    </span>
                    <span className="text-xs text-gray-500">{note.date}</span>
                  </div>
                  <h4 className="font-semibold text-[#0b1d51] mb-2">{note.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{note.downloads} downloads</span>
                    <button className="text-blue-600 hover:text-blue-800">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join the Conversation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d51] mb-4">
              Join the Conversation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engage with fellow learners through comments, Q&As, and discussion threads.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0b1d51] mb-2">Discussion Threads</h3>
                    <p className="text-gray-600">Start conversations, ask questions, and share insights with the community.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0b1d51] mb-2">Direct Messaging</h3>
                    <p className="text-gray-600">Connect one-on-one with community members for deeper collaboration.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0b1d51] mb-2">Group Chats</h3>
                    <p className="text-gray-600">Join skill-specific groups and collaborate with like-minded learners.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0b1d51] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Start a Discussion
                </button>
                <button className="border-2 border-[#0b1d51] text-[#0b1d51] px-6 py-3 rounded-lg font-semibold hover:bg-[#0b1d51] hover:text-white transition-colors">
                  View Community Topics
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[#0b1d51] mb-6">Recent Discussions</h3>
              <div className="space-y-6">
                {[
                  { title: 'Best practices for React state management?', author: 'Sarah Chen', replies: 12, time: '2h ago' },
                  { title: 'How to improve UX in mobile apps', author: 'Mike Rodriguez', replies: 8, time: '4h ago' },
                  { title: 'Music production tips for beginners', author: 'Emma Thompson', replies: 15, time: '1d ago' }
                ].map((discussion, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <h4 className="font-semibold text-[#0b1d51] mb-2">{discussion.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>by {discussion.author}</span>
                      <div className="flex items-center space-x-4">
                        <span>{discussion.replies} replies</span>
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Exchange Marketplace */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d51] mb-4">
              Skill Exchange Marketplace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Post what you know. Find what you want to learn.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === category.id 
                    ? 'bg-[#0b1d51] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillExchanges.map((exchange, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exchange.type === 'offer' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {exchange.type === 'offer' ? 'Offering' : 'Looking for'}
                    </span>
                    <span className="text-sm text-gray-500">{exchange.timeAgo}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#0b1d51] mb-2">{exchange.skill}</h3>
                  <p className="text-gray-600 mb-4">by {exchange.user}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span>Level:</span>
                      <span className="font-medium">{exchange.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Format:</span>
                      <span className="font-medium">{exchange.format}</span>
                    </div>
                  </div>
                  
                  {exchange.wants && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <span className="text-sm text-gray-600">Wants to learn: </span>
                      <span className="font-medium text-[#0b1d51]">{exchange.wants}</span>
                    </div>
                  )}
                  
                  {exchange.offers && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <span className="text-sm text-gray-600">Can offer: </span>
                      <span className="font-medium text-[#0b1d51]">{exchange.offers}</span>
                    </div>
                  )}
                  
                  <button className="w-full bg-[#0b1d51] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#0b1d51] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Post Your Skill
              </button>
              <button className="border-2 border-[#0b1d51] text-[#0b1d51] px-8 py-3 rounded-lg font-semibold hover:bg-[#0b1d51] hover:text-white transition-colors">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d51] mb-4">
              Upcoming Skill Sessions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Live peer-led sessions you can join or host.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      event.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {event.level}
                    </span>
                    <span className="text-sm text-gray-500">{event.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#0b1d51] mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">Hosted by {event.host}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} registered</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#0b1d51] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#0b1d51] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                View All Events
              </button>
              <button className="border-2 border-[#0b1d51] text-[#0b1d51] px-8 py-3 rounded-lg font-semibold hover:bg-[#0b1d51] hover:text-white transition-colors">
                Host a Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d51] mb-4">
              Voices from the SkillSwap Tribe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community members about their experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0b1d51]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0b1d51] to-[#1a2b5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Swap Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners and creators who are already building their skills and connections.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#0b1d51] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Sign Up & Join Community
              <Users className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0b1d51] transition-colors flex items-center justify-center">
              Browse Skills
              <Search className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;