import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#3b424f] text-white p-8">
      <div className="max-w-[1140px] mx-auto">
        <div className=" footer p-10">
          <div className="">
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </div>
      <div>
        <p>
          Copyright © 2022 - All right reserved by{" "}
          <a
            className="text-accent"
            href="https://www.linkedin.com/in/dev-hasan-rifat/"
          >
            Hasan Rifat
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
