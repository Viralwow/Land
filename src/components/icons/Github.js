import * as React from 'react'

function SvgGithub({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M15 2.5C8.094 2.5 2.5 8.094 2.5 15a12.492 12.492 0 008.547 11.86c.625.109.86-.266.86-.595 0-.296-.017-1.28-.017-2.328-3.14.58-3.953-.765-4.203-1.468-.14-.36-.75-1.469-1.28-1.767-.438-.233-1.063-.812-.017-.827.985-.016 1.688.906 1.923 1.281 1.124 1.89 2.922 1.359 3.64 1.032.11-.813.437-1.36.797-1.672-2.781-.312-5.688-1.391-5.688-6.172 0-1.36.484-2.484 1.282-3.36-.125-.313-.563-1.594.125-3.313 0 0 1.046-.327 3.437 1.283a11.6 11.6 0 013.125-.423c1.063 0 2.125.14 3.125.421 2.39-1.625 3.438-1.28 3.438-1.28.687 1.72.25 3 .125 3.313.796.875 1.281 1.984 1.281 3.359 0 4.797-2.921 5.86-5.703 6.172.453.39.844 1.14.844 2.313 0 1.671-.016 3.015-.016 3.437 0 .328.235.718.86.593A12.52 12.52 0 0027.5 15c0-6.906-5.594-12.5-12.5-12.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgGithub
