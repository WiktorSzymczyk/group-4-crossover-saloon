import React from "react";
import bg from "../img/bg.png";
import Contact from "./Contact";
import Team from "./Team";
import Opening from "./Opening";

export default function Home() {
  return (
    <>
      <div className="flex flex-col py-5 bg-[#d4d4d4]">
        <img src={bg} alt="" className="content-center px-[30%]" />
        <h1 className="text-center text-4xl font-medium py-[1%]">
          Who are we?
        </h1>
        <p className="px-[10%]">
          Voted Best Men's London Barbers by Esquire, GQ and Time Out, Joe and
          Co. is a contemporary text-4xlBarbershop based in Soho that offers all
          the frills and service you would expect from a superior salon, but
          with a focus on an informal atmosphere. Haircuts are classic, creative
          or modern, cut with precision by highly accomplished specialist
          hairstylists hand-picked by Joe.
        </p>
      </div>
      <Team />
      <Contact />
      <Opening />
    </>
  );
}
