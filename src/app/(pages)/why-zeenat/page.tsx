import ComparisonTable from "@/app/components/ComparisonTable"

export default function WhyZeenatPage() {
    return (
        <div className="py-8 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">Why Zeenat is Different</h1>
                <p className="text-xl text-gray-600">
                    We're building a marketplace that actually works for women sellers
                </p>
            </div>

            <ComparisonTable />

            <div className="text-center mt-12">
                <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors">
                    Get Started with Zeenat
                </button>
            </div>
        </div>
    )
}