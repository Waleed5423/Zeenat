export default function CommunityPage() {
    return (
      <div className="py-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Zeenat Community — Learn. Grow. Connect.</h1>
          <p className="text-xl text-gray-600">
            Zeenat is more than a marketplace — it's a sisterhood.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-soft hover-scale">
            <div className="text-4xl mb-4">💼</div>
            <h2 className="text-2xl font-semibold mb-4">Business Tips</h2>
            <p className="text-gray-600">
              Learn from successful sellers about pricing, marketing, and growing your business.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-soft hover-scale">
            <div className="text-4xl mb-4">🧘</div>
            <h2 className="text-2xl font-semibold mb-4">Mental Health</h2>
            <p className="text-gray-600">
              Support and resources for managing stress and maintaining wellbeing as an entrepreneur.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-soft hover-scale">
            <div className="text-4xl mb-4">📣</div>
            <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
            <p className="text-gray-600">
              Updates about new features, events, and opportunities on Zeenat.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-soft hover-scale">
            <div className="text-4xl mb-4">❤</div>
            <h2 className="text-2xl font-semibold mb-4">Support from Other Sellers</h2>
            <p className="text-gray-600">
              Connect with other women entrepreneurs to share experiences and advice.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors">
            Log In to Join the Community
          </button>
        </div>
      </div>
    )
  }