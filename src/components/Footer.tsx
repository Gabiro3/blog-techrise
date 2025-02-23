import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="bg-default mt-8 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link
            href="https://tehseen-site.vercel.app/"
            className="hover:underline"
          >
            TechRise Rwanda
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm font-medium text-gray-800 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="https://techriserwanda.org" target="_blank">
              <Icon name="search" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/techriserwanda" target="_blank">
              <Icon name="instagram" />
            </Link>
          </li>
          <li>
            <Link
              href="https://rw.linkedin.com/company/techriserwanda"
              target="_blank"
            >
              <Icon name="linkedin" />
            </Link>
          </li>
          <li>
            <Link href="https://youtube.com/@rwandatechrise?si=8I61aaP_upPcAf9B" target="_blank">
              <Icon name="youtube" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
