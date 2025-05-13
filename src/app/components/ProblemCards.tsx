export default function ProblemCards() {
    const problems = [
      {
        icon: '🚫',
        title: 'Harassment on public platforms',
        description: 'Many women face inappropriate messages and behavior when selling online.',
      },
      {
        icon: '🕵️‍♀️',
        title: 'Fake orders and scammers',
        description: 'Sellers often deal with fake buyers who waste their time and resources.',
      },
      {
        icon: '💬',
        title: 'Language barriers',
        description: 'Most platforms don\'t support Urdu, making it hard for many sellers.',
      },
    ]
  
    return (
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">The Problems Women Sellers Face</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-soft hover-scale transition-all hover:shadow-md"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }