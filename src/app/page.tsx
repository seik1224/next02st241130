'use client'
import Gsap01 from "./gsap/gsap01";
import Gsap02 from "./gsap/gsap02";
import Gsap03 from "./gsap/gsap03";
import Lenis01 from "./lenis/lenis01";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Gsap04 from "./gsap/gsap04";
import Framer01 from "./framer/framer01";
import Framer02 from "./framer/framer02";
import Framer03 from "./framer/framer03";

// 스트롤트리거 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      {/* <Lenis01 /> */}
      {/* <Gsap01 /> */}
      {/* <Gsap02 /> */}
      {/* <Gsap03 /> */}
      {/* <Gsap04 /> */}
      {/* <Framer01 /> */}
      {/* <Framer02 /> */}
      <Framer03 />
    </>
  );
}
