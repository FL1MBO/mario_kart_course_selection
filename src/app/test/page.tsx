"use client"

import { useState } from "react";
import CourseTile from "./course-tile";

export default function Page() {
  const [pick_count, set_pick_count] = useState(0)
  const [currently_picking, set_currently_picking] = useState("banning")


  function increase_pick_count() {
    set_pick_count(pick_count + 1)
    if (pick_count > 3){
      set_currently_picking("picking")
    }
  }

  return (
    <>
      <div className="grid grid-cols-8 grid-rows-4 gap-2">
        {Array.from({ length: 32 }).map((_, i) => (
          <CourseTile key={i + 1}
          course_id={i + 1}
          increase_pick_count={increase_pick_count}
          pick_count={pick_count}
          currently_picking={currently_picking}
          />
        ))}
      </div>
      <div>{pick_count}</div>
      <div>{currently_picking}</div>
    </>
  );
}
