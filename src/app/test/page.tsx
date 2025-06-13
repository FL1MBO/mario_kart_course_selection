export default function Page() {
  return (
    <div className="grid grid-cols-8 grid-rows-4 gap-2">
      {Array.from({ length: 32 }).map((_, i) => (
        <div key={i} className="relative group">
          <img
            src={`/course_images/${i + 1}.webp`}
            alt=""
            className="w-full h-auto object-cover"
          />
          {/* Red cross overlay */}
          <div className="absolute inset-0 bg-[rgba(220,38,38,0.5)] hidden group-hover:flex items-center justify-center pointer-events-none">
            <div className="w-10 h-1 bg-white rotate-45 absolute" />
            <div className="w-10 h-1 bg-white -rotate-45 absolute" />
          </div>
        </div>
      ))}
    </div>
  );
}
