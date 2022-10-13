import React from "react";

const Stat = () => {
  return (
    <section className="py-[40px] max-w-[1140px] mx-auto">
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-1 shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="text-[#570df8] inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-secondary">Total Likes</div>
          <div className="stat-value text-[#570df8]">25.6K</div>
          <div className="stat-desc text-accent">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-secondary">Page Views</div>
          <div className="stat-value text-[#f000b8]">2.6M</div>
          <div className="stat-desc text-secondary">
            21% more than last month
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" alt="" />
              </div>
            </div>
          </div>
          <div className="stat-value text-secondary">86%</div>
          <div className="stat-title text-[#1f2937]">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </section>
  );
};

export default Stat;
