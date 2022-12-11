"use client";
import { Footer as FBFooter } from "flowbite-react";

export default function Footer() {
  return (
    <FBFooter container={true}>
      <FBFooter.Copyright href="#" by="Gildo Junior" year={2022} />
      <FBFooter.LinkGroup>
        <FBFooter.Link href="#">About</FBFooter.Link>
        <FBFooter.Link href="#">Privacy Policy</FBFooter.Link>
        <FBFooter.Link href="#">Licensing</FBFooter.Link>
        <FBFooter.Link href="#">Contact</FBFooter.Link>
      </FBFooter.LinkGroup>
    </FBFooter>
  );
}
