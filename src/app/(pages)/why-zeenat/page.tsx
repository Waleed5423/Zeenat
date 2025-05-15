import ComparisonTable from "@/app/components/ComparisonTable"

export default function WhyZeenatPage() {
    return (
        <div className="py-8 max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">Why Zeenat is Different</h1>
                <p className="text-xl text-gray-600">
                    We&apos;re building a marketplace that actually works for women sellers
                </p>
            </div>

            <ComparisonTable />

            {/* About Us Section with enhanced UI */}
            <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 shadow-sm">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">Pakistan&apos;s First Women-Only Marketplace</h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-4">
                                Zeenat is Pakistan&apos;s first of its kind, verified, women-only marketplace. Built specifically for female entrepreneurs who want to take their businesses online in a safe, harassment-free environment.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                We provide a platform that works in your own language, with features designed to empower women in e-commerce.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-pink-100 shadow-xs">
                            <h3 className="font-semibold text-xl mb-3 text-pink-700">What Makes Us Different</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-2">✓</span>
                                    <span>ID verification for all users</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-2">✓</span>
                                    <span>Moderated chat systems</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-2">✓</span>
                                    <span>Incentives for new sellers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-2">✓</span>
                                    <span>Women-led support system</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-2">✓</span>
                                    <span>Local language support</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-lg font-medium text-gray-800">
                            Empowering women to transition from door-to-door sellers to successful online entrepreneurs.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <button className="px-8 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-pink-200">
                    Get Started with Zeenat
                </button>
            </div>
        </div>
    )
}