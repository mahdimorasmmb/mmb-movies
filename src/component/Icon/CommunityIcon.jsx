import React from "react";

export default function CommunityIcon({ className }) {
  return (
    <svg
      fill="#000000"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      style={{ width: 60 }}
      className={className}
    >
      <circle cx="24" cy="15" r="3"></circle>
      <circle cx="13" cy="18" r="3"></circle>
      <circle cx="35" cy="18" r="3"></circle>
      <path d="M35,23c-0.9,0-1.7,0.3-2.5,0.7l0,0l-8.5,5l-8.5-5l0,0C14.7,23.3,13.9,23,13,23c-2.8,0-5,2.2-5,5v8h10v-6.2l5,3c0,0,0,0,0,0  c0.2,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3,0.1,0.5,0.1c0,0,0,0,0,0s0,0,0,0c0.2,0,0.3,0,0.5-0.1c0.2,0,0.3-0.1,0.5-0.2c0,0,0,0,0,0l5-3V36  h10v-8C40,25.2,37.8,23,35,23z"></path>
      <path d="M24,26.4l4.8-2.8c-0.6-2-2.5-3.5-4.8-3.5s-4.1,1.5-4.8,3.5L24,26.4z"></path>
    </svg>
  );
}
