import React, { useRef } from 'react'
import gsap from 'gsap';

const Gsap01 = () => {
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);

    // to 애니메이션
    const handleClickBox1 = () => {
        gsap.to(boxRef1.current, {
            x:100, // 종료 위치
            opacity:0.5,
            duration :1,
            ease :'power4.out', // 가속도
            /*
                power1, power2, power3, power4 (숫자가 높을수록 강해짐)
                sine, expo, circ
                back, elastic, bounce

                .in 시작속도빠름
                .out 끝속도빠름
                .inOut 시작과 끝속도빠름
            */
           repeat : 8, // 애니메이션 반복 횟수
           yoyo : true, // 애니메이션 종료 후 원래 위치로 되돌아가기
           repeatDelay : 0.5, // 반복 사이 딜레이 추가
           delay: 1 // 애니메이션 시작 딜레이
        })
    }

    // from 애니메이션
    const handleClickBox2 = () => {
        gsap.from(boxRef2.current, {
            x:200,
            opacity :0,
            duration:1.5,
            ease: 'power2.out'
        })
    }

  return (
    <>
        <div ref={boxRef1} className='w-40 h-40 bg-blue-500 cursor-pointer mb-4' onClick={handleClickBox1}>
            to
        </div>
        <div ref={boxRef2} className='w-40 h-40 bg-red-500 cursor-pointer mb-4' onClick={handleClickBox2}>
            from
        </div>
        <div ref={boxRef3} className='w-40 h-40 bg-green-500 cursor-pointer mb-4'>
            fromTo
        </div>
        <div ref={boxRef4} className='w-40 h-40 bg-yellow-500 cursor-pointer mb-4'>
            set
        </div>
    </>
  )
}

export default Gsap01