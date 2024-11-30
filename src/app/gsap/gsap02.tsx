import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Gsap02 = () => {
    const boxRef = useRef(null);

    useEffect(()=>{
        gsap.to(boxRef.current, {
            scrollTrigger : {
                // 스크롤 트리거 대상 : 어떤 요소를 만났을 때 애니메이션 시작
                trigger : boxRef.current,
                // 요소의 top 부분이 뷰포트 80% 지점에 도달할 때 애니메이션 시작
                start : '50% 80%',
                // 요소의 top 부분이 뷰포트 30% 지점에 도달할 때 애니메이션 끝
                end : 'top 30%',
                markers:true,
                // 스크롤에 따라 애니메이션 진행
                scrub: true 
            },
            x : 100,
            duration : 1,  
        })
    }, [])
  return (
    <section className='h-[200vh] flex justify-center items-center'>
        <div ref={boxRef} className='size-20 bg-red-600'>
            BOX
        </div>
    </section>
  )
}

export default Gsap02