import ScrollToTop from 'react-scroll-to-top'

const Footer = () => {
  return (
    <footer>
      <div className='pt-3 pb-3 glass-footer'>
        <div className='d-flex justify-content-center contenido gap-4'>
          <a target='blank' href='https://github.com/LizardoCt'>
            <i className='fab fa-github fa-2x p-2 text-dark' />
          </a>
          <a target='blank' href='https://twitter.com/SlaterGvch?s=09'>
            <i className='fab fa-twitter fa-2x p-2 text-dark contenido2' />
          </a>
          <a target='blank' href='https://www.linkedin.com/in/lizardoct/'>
            <i className='fab fa-linkedin fa-2x p-2 text-dark contenido5' />
          </a>
        </div>
        <ul className='d-flex justify-content-center container mt-1 gap-4 text-light'>
          <li className='list-inline-item'>
            <span>Home</span>
          </li>
          <li className='list-inline-item'>
            <span>About</span>
          </li>
          <li className='list-inline-item'>
            <span>Privacy Policy</span>
          </li>
        </ul>
        <p className='d-flex justify-content-center m-0 pb-1 text-ligth-50 c'>
          © 2023. By
          <a target='blank' href='https://github.com/LizardoCt'>
            nene.
          </a>
        </p>
      </div>
      <ScrollToTop id='scroll' smooth color='black' />
    </footer>
  )
}

export default Footer
