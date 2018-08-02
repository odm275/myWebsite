import React from 'react'

export default ({ children }) => (
  <div
    css={{
      display: 'flex',
      padding: '16px',
      color: 'white',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
      },
    }}
  >
    {children}
  </div>
)
