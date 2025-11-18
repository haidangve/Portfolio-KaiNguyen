"use client";

import { useEffect } from "react";

export function ScaleAdjuster() {
  useEffect(() => {
    // Scale production to 90% to match dev appearance
    if (window.location.hostname !== "localhost") {
      document.body.style.transform = "scale(0.9)";
      document.body.style.transformOrigin = "top left";
      document.body.style.width = "111.11%";
      document.body.style.height = "111.11%";
    }
  }, []);

  return null;
}
