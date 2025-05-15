export default function ComparisonTable() {
    return (
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-pastel-pink">
                        <th className="px-6 py-4 text-left font-semibold">Feature</th>
                        <th className="px-6 py-4 text-left font-semibold">Other Platforms</th>
                        <th className="px-6 py-4 text-left font-semibold">Zeenat</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    <tr>
                        <td className="px-6 py-4">Seller Verification</td>
                        <td className="px-20 py-4 ">❌</td>
                        <td className="px-10 py-4 text-green-500">✅</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Urdu Support</td>
                        <td className="px-20 py-4 ">❌</td>
                        <td className="px-10 py-4 text-green-500">✅</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Women-Only</td>
                        <td className="px-20 py-4 ">❌</td>
                        <td className="px-10 py-4 text-green-500">✅</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Anti-Harassment System</td>
                        <td className="px-20 py-4 ">❌</td>
                        <td className="px-10 py-4 text-green-500">✅</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Community Space</td>
                        <td className="px-20 py-4 ">❌</td>
                        <td className="px-10 py-4 text-green-500">✅</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}