"use client"

import { useState } from "react"

export default function CourseTile({ course_id }: any) {
  const [select_state, set_selectState] = useState("neutral")

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => set_selectState("banned")}
    >
      <img
        src={`/course_images/${course_id}.webp`}
        alt=""
        className="w-full h-auto object-cover"
      />

      {/* Red cross overlay */}
      <div
        className={`absolute inset-0 ${
          select_state === "banned"
            ? "bg-red-600 flex"
            : "bg-[rgba(220,38,38,0.6)] hidden group-hover:flex"
        } items-center justify-center`}
        style={{ pointerEvents: "none" }} // allow clicks to pass through
      >
        <div className="w-10 h-1 bg-white rotate-45 absolute" />
        <div className="w-10 h-1 bg-white -rotate-45 absolute" />
      </div>
    </div>
  )
}