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
            <a
              className='links_footer'
              target='blank'
              href='https://apod.nasa.gov/apod/lib/aptree.html'
            >
              Home
            </a>
          </li>
          <li className='list-inline-item'>
            <a
              className='links_footer'
              target='blank'
              href='https://apod.nasa.gov/apod/lib/about_apod.html#srapply'
            >
              About
            </a>
          </li>
          <li className='list-inline-item'>
            <a
              className='links_footer'
              target='blank'
              href='https://www.nasa.gov/privacy/'
            >
              Privacy Policy
            </a>
          </li>
        </ul>
        <p className='d-flex justify-content-center m-0 pb-1 text-ligth-50 c'>
          Authors & editors:
          <a
            className='me-2'
            target='blank'
            href='https://www.mtu.edu/physics/department/faculty/nemiroff/'
          >
            Robert Nemiroff
          </a>
          &
          <a
            target='blank'
            href='https://apod.nasa.gov/htmltest/jbonnell/www/bonnell.html'
          >
            Jerry Bonnell
          </a>
        </p>
        <p className='d-flex justify-content-center m-0 pb-1 text-ligth-50 c'>
          © 2025 All rights reserved by{' '}
          <a target='blank' href='https://www.nasa.gov/'>
            NASA
          </a>
        </p>
        <p className='d-flex justify-content-center m-0 pb-1 text-ligth-50 c'>
          Created and designed by
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
