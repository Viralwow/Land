import * as React from 'react'

function SvgPuzzle({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.583 1.064c1.03-.015 1.917.544 2.698 1.324L15.594 3.7a4.112 4.112 0 115.704 5.704l1.313 1.313.002.002c.779.781 1.338 1.667 1.322 2.696-.014 1.022-.591 1.875-1.325 2.604l-.002.001-1.328 1.33c-.497.496-1.147.443-1.54.277-.388-.163-.801-.54-.896-1.116a2.027 2.027 0 10-2.333 2.332c.576.094.954.508 1.118.896.166.394.219 1.044-.279 1.54l-1.332 1.333h-.001c-.727.733-1.58 1.31-2.601 1.324-1.029.015-1.913-.542-2.693-1.321h-.001l-1.316-1.318a4.112 4.112 0 11-5.704-5.704l-1.313-1.313v-.002c-.782-.78-1.34-1.666-1.325-2.695.015-1.022.593-1.875 1.326-2.605h.002l1.329-1.33c.496-.497 1.146-.445 1.538-.279.389.165.803.542.898 1.118A2.028 2.028 0 108.49 6.156c-.578-.093-.955-.508-1.118-.896-.167-.393-.219-1.042.278-1.54l1.33-1.328V2.39c.73-.734 1.582-1.31 2.604-1.326zm.032 2.083c-.213.003-.573.123-1.157.712l-.003.003-.566.565A4.111 4.111 0 114.427 9.89l-.566.566-.003.002c-.588.585-.708.944-.711 1.158-.003.206.1.577.715 1.195l2.428 2.427a1.042 1.042 0 01-.59 1.767A2.028 2.028 0 107.996 19.3a1.042 1.042 0 011.768-.59l2.43 2.43v.002c.615.613.986.716 1.191.712.213-.003.572-.122 1.154-.709l.003-.003.57-.57a4.112 4.112 0 115.46-5.461l.567-.566.003-.002c.588-.584.708-.945.711-1.157.003-.207-.099-.577-.715-1.194v-.001L18.71 9.764a1.041 1.041 0 01.59-1.768A2.028 2.028 0 1017.004 5.7a1.042 1.042 0 01-1.768.59L12.81 3.863c-.617-.617-.99-.719-1.194-.716z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPuzzle
