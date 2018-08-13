import styles from './footer-module.module.css'

const Footer = () => {
  const { footerBlock, footerContainer, title } = styles
  return (
    <footer className={footerBlock}>
      <div className={footerContainer}>
        <ul>
          <li className={title}>Oscar Mejia</li>
          <li>
            <a
              css={{
                color: '#f7df1e',
                ':hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              pomejia@gmail.com
            </a>
          </li>
          <li>
            Hey, I'm a software developer from Texas. I can help you build and
            grow your next product.
          </li>
        </ul>
        <ul>
          <li className={title}>Menu</li>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
        </ul>
        <ul>
          <li className={title}>Contact</li>
          <li>
            <a
              css={{
                color: '#f7df1e',
                ':hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              pomejia@gmail.com
            </a>
          </li>
        </ul>
        <ul>
          <li className={title}>Social</li>
          <li>Github</li>
          <li>FreeCodeCamp</li>
          <li>Codepen</li>
        </ul>
      </div>
      <p
        style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          textAlign: 'center',
          margin: 0,
          color: '#c9c9c9',
        }}
      >
        Copyright Oscar Mejia 2018 ©
      </p>
    </footer>
  )
}

export default Footer
