import React from "react";
import bg from "./bg.png";
import Contact from "./Contact";
import Team from "./Team";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <img src={bg} alt="" className="content-center px-[30%]" />
        <h1 className="text-center text-4xl font-medium">Who are we?</h1>
        <p className="px-[20%]">
          Voted Best Men's London Barbers by Esquire, GQ and Time Out, Joe and
          Co. is a contemporary Barbershop based in Soho that offers all the
          frills and service you would expect from a superior salon, but with a
          focus on an informal atmosphere. Haircuts are classic, creative or
          modern, cut with precision by highly accomplished specialist
          hairstylists hand-picked by Joe.
        </p>
      </div>
      <Team />
      <Contact />
    </>
  );
}
