import React from 'react'
import NextImage from 'next/image'

const Image = ({ alt = '', ...props }) => {
  const env = process.env.NEXT_PUBLIC_APP_ENV
  return (
    <NextImage
      loading={env === 'test' ? 'eager' : 'lazy'}
      alt={alt}
      {...props}
    />
  )
}

export default Image
