import CategoryCards  from "@/app/components/CategoryCards"


export default function CategoriesPage() {
    return (
        <div className="py-8">
            <h1 className="text-4xl font-bold text-center mb-12">Shop by Category</h1>
            <CategoryCards />
        </div>
    )
}