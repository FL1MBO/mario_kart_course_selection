export default function Page() {
    return (
        <div className="grid grid-cols-8 grid-rows-4 gap-2">
            {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="bg-emerald-900 p-4 text-center">
                    <img src={`course_images/${i+1}.webp`} alt="" />
                    Item {i + 1}
                </div>
            ))}
        </div>

    )
}
