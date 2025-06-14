"use client"

import { useState } from "react"

export default function CourseTile({ course_id, increase_pick_count, currently_picking }: any) {
  const [select_state, set_select_state] = useState("neutral")

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => {
        increase_pick_count()
        if (currently_picking === "picking") {
          set_select_state("picked")
        } else if (currently_picking === "banning") {
          set_select_state("banned")
        }
      }}
    >
      <img
        src={`/course_images/${course_id}.webp`}
        alt=""
        className="w-full h-auto object-cover"
      />

      {/* Currently banning */}
      {currently_picking === "banning" && (
        <div
          className={`absolute inset-0 bg-[rgba(220,38,38,0.3)] hidden group-hover:flex items-center justify-center`}
          style={{ pointerEvents: "none" }} // allow clicks to pass through
        >
          <div className="w-10 h-1 bg-white rotate-45 absolute" />
          <div className="w-10 h-1 bg-white -rotate-45 absolute" />
        </div>
      )}

      {/* Currently picking */}
      {currently_picking == "picking" && (
        <div
          className={`absolute inset-0 bg-[rgba(53,220,38,0.21)] hidden group-hover:flex items-center justify-center`}
          style={{ pointerEvents: "none" }} // allow clicks to pass through
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.192 9.191-4.242-4.24a1 1 0 00-1.415 1.415l5 4.999a1 1 0 001.415 0l9.848-9.847z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      {/* Already banned */}
      {select_state === "banned" && (
        <div
          className={`absolute inset-0 bg-[rgba(255,12,12,0.51)] flex items-center justify-center`}
          style={{ pointerEvents: "none" }}>
          <div className="w-10 h-1 bg-white rotate-45 absolute" />
          <div className="w-10 h-1 bg-white -rotate-45 absolute" />
        </div>
      )}
      {/* Already picked */}
      {select_state === "picked" && (
        <div
          className={`absolute inset-0 bg-[rgba(81,255,12,0.51)] flex items-center justify-center`}
          style={{ pointerEvents: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.192 9.191-4.242-4.24a1 1 0 00-1.415 1.415l5 4.999a1 1 0 001.415 0l9.848-9.847z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  )
}