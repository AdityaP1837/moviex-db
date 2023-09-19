import React from 'react'

const ContentWrapper = ({content, id}) => {
  return (
    <div id={id} className='bg-black-3 mid-xl:mx-[10px] l:mx-[5px] mx-[20px] my-5 rounded-[10px] shadow-[0px_1px_14px_3px_rgb(0,0,0)]'>
      {content}
    </div>
  )
}

export default ContentWrapper
