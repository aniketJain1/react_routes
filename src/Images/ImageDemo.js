import React from 'react'

import n1 from './nature1.jpg'

function ImageDemo() {
  return (
    <div className='normaldiv'>
    
        {/* 1st Way */}
        <img src={n1} width='300' />

        {/* 2nd Way */}
        <img src={require('./nature2.jpg')} width='100' />

        {/* 3rd Way */}
        <img src='images/nature3.jpg' width='300' />

    </div>
  )
}

export default ImageDemo