import Link from 'next/link'

export default function SolutionCards() {
    const solutions = [
        {
            title: 'Verified Sellers Only',
            description: 'Each seller goes through ID and address checks.',
        },
        {
            title: 'Women-Only Community Chat',
            description: 'No male users. No spam. Full control over interactions.',
        },
        {
            title: 'Urdu & English Interface',
            description: 'Use Zeenat in your preferred language.',
        },
    ]

    return (
        <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-soft hover-scale transition-all hover:shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <Link
                    href="/categories"
                    className="inline-block px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors"
                >
                    Explore the Platform
                </Link>
            </div>
        </section>
    )
}