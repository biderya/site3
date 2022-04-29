import Head from "next/head";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import Tabs from "../components/tab";
import YoutubeVideo from "../components/youtube";

export default function Home() {
  return (
    <>
      <Tabs className="container"/>
      <YoutubeVideo/>
      
    </>
  );
}
