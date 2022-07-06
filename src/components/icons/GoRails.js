import * as React from 'react'

function SvgGoRails({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 272 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M105.502 16.71l-3.654 3.6c-.858-.845-2.017-1.404-3.64-1.404-2.698 0-4.607 2.072-4.607 5.057 0 3.476 2.25 5.207 4.69 5.207 2.399 0 3.775-.94 4.321-2.808h-4.471v-3.79h9.487c.082.6.11 1.173.11 1.718 0 6.366-4.731 9.556-9.216 9.556-5.998 0-10.223-4.09-10.223-9.883 0-5.807 4.225-9.897 10.223-9.897 3.026 0 5.358.995 6.98 2.645M114.206 23.963c0 2.917 1.923 4.934 4.703 4.934 2.782 0 4.703-2.017 4.703-4.934 0-2.918-1.921-4.935-4.703-4.935-2.78 0-4.703 2.017-4.703 4.935zm14.791 0c0 5.697-4.185 9.896-10.088 9.896-5.902 0-10.087-4.199-10.087-9.896 0-5.698 4.185-9.897 10.087-9.897 5.903 0 10.088 4.199 10.088 9.897M141.261 19.068v3.394h3.272c1.28 0 2.221-.531 2.221-1.69 0-1.159-.941-1.704-2.221-1.704h-3.272zm10.728 1.704c0 2.945-1.704 5.057-4.935 5.725l5.194 7.007h-6.107l-4.594-6.775h-.286v6.775h-5.181V14.42h8.506c4.853 0 7.403 2.508 7.403 6.352M161.355 25.243h3.913l-1.95-5.643-1.963 5.643zm12.282 8.26h-5.494l-1.267-3.639h-7.13l-1.254 3.64h-5.412l7.225-19.084h6.107l7.225 19.084M174.795 33.504h5.18V14.42h-5.18v19.084zM196.795 33.504h-14.367V14.42h5.179v14.313h9.188v4.77M211.906 20.323c-1.254-.71-3.148-1.595-5.507-1.595-1.39 0-2.453.382-2.453 1.24 0 1.077 1.949 1.186 3.898 1.569l.614.122c3.939.764 5.943 2.658 5.943 5.589 0 4.826-4.076 6.611-8.138 6.611-3.422 0-6.529-.818-8.71-2.372l2.535-4.226c1.513.914 3.34 1.963 6.243 1.963 1.39 0 2.413-.381 2.413-1.322 0-.995-1.186-1.172-3.557-1.58l-.723-.124c-4.39-.75-6.216-2.644-6.121-6.025.095-3.653 3.162-6.093 7.743-6.093 2.494 0 4.744.26 8.056 2.004l-2.236 4.24z"
        fill="#FEFEFE"
      />
      <path
        d="M57.682 34.352l12.834-20.777.018.176-.998 17.246-11.854 3.355z"
        fill="#fff"
      />
      <path
        d="M83.348 34.352L70.514 13.575v.248l1.758 17.174 11.076 3.355z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgGoRails