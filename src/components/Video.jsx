import React from 'react'

const Video = () => {
  return (
    <div className='flex justify-center mt-[50px]'>
      <iframe src="https://www.youtube.com/embed/hscJXcQXOS4?si=8n67sfKqFcOi6pTt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen className='max-w-[720px] max-h-[420px] w-full h-[420px]'/>
    </div>
  )
}

export default Video