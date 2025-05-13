export default function SignupPage() {
    return (
        <div className="py-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-soft">
                <h1 className="text-3xl font-bold mb-2">Become a Verified Zeenat Seller</h1>
                <p className="text-gray-600 mb-8">
                    The marketplace that works for you — not against you.
                </p>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="03XX-XXXXXXX"
                                />
                            </div>

                            <div>
                                <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-1">
                                    Product Photos
                                </label>
                                <input
                                    type="file"
                                    id="photos"
                                    multiple
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="cnic" className="block text-sm font-medium text-gray-700 mb-1">
                                    CNIC Upload
                                </label>
                                <input
                                    type="file"
                                    id="cnic"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                                    Business Type
                                </label>
                                <select
                                    id="business"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                >
                                    <option value="">Select your business type</option>
                                    <option value="clothes">Clothes</option>
                                    <option value="accessories">Accessories</option>
                                    <option value="food">Food</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="healthcare">Healthcare</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                    Delivery Address
                                </label>
                                <textarea
                                    id="address"
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Your complete address for deliveries"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>

                    <div className="md:w-1/3 bg-pastel-pink p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Why join Zeenat?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Safe space for sellers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Urdu-friendly platform</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>No fake buyers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Direct support from women moderators</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}