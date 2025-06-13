import CourseTile from "./course-tile";

export default function Page() {
  return (
    <div className="grid grid-cols-8 grid-rows-4 gap-2">
      {Array.from({ length: 32 }).map((_, i) => (
        <CourseTile key={i+1} course_id={i+1}/>
      ))}
    </div>
  );
}
