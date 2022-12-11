"use client";
import { Navbar as FlowNavbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <FlowNavbar className="h-20 flex items-center bg-white">
      <FlowNavbar.Brand href="https://flowbite.com/">
        <Image
          src="/pharmago-logo-nome.svg"
          className="mr-3"
          alt="PharmaGO Logo"
          width={200}
          height={200}
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold text-primary-40">
          PharmaGO
        </span> */}
      </FlowNavbar.Brand>
      <input
        type="text"
        id="search-navbar"
        className="block xl:w-[40rem] lg:w-[30rem] p-2 pl-10 text-sm text-neutral-100 border border-gray-300 rounded-lg bg-neutral-10 focus:ring-primary-40 focus:border-primary-40"
        placeholder="Search..."
      />
      <FlowNavbar.Toggle />
      <FlowNavbar.Collapse>
        <li
          className={`hover:text-primary-30 ${
            pathname === "/" && "text-primary-40"
          }`}
        >
          <Link href="#">Home</Link>
        </li>
        <li
          className={`hover:text-primary-30 ${
            pathname === "/about" && "text-primary-40"
          }`}
        >
          <Link href="#">About</Link>
        </li>
        <li
          className={`hover:text-primary-30 ${
            pathname === "/services" && "text-primary-40"
          }`}
        >
          <Link href="#">Services</Link>
        </li>
        <li
          className={`hover:text-primary-30 ${
            pathname === "/pricing" && "text-primary-40"
          }`}
        >
          <Link href="#">Pricing</Link>
        </li>
        <li
          className={`hover:text-primary-30 ${
            pathname === "/contact" && "text-primary-40"
          }`}
        >
          <Link href="#">Contact</Link>
        </li>
      </FlowNavbar.Collapse>
    </FlowNavbar>
  );
}
