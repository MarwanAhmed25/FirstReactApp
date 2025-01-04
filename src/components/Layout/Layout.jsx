import { Outlet, Link } from 'react-router-dom'; 


export default function Layout(){

    return <>
    <nav className="navbar navbar-light p-3">
        <div className="container">
          <Link to="" className="navbar-brand text-white">Start Framework</Link>
          <div className="d-flex">
            <Link to="about" className="nav-link text-white p-2 mx-2">About</Link>
            <Link to="portfolio" className="nav-link text-white p-2 mx-2">portfolio</Link>
            <Link to="contact" className="nav-link text-white p-2 mx-2">Contact</Link>
          </div>
        </div>
      </nav>

      <main className='text-white'>
        
          
          
           <Outlet ></Outlet>


          <section className="home-about p-5 row text-center">
            <section className='col-12 col-md-6 col-lg-4'>
                <h2>LOCATION</h2>
                <p className="m-0">2215 John Daniel Drive Clark, MO 65243</p>
            </section>
            <section className='col-12 col-md-6 col-lg-4'>
                <h2>AROUND THE WEB</h2>
                <p className="m-0">
                    <span className="fa-stack" style={ {verticalAlign:'top'} }>
                        <i className="fa-regular fa-circle fa-stack-2x"></i>
                        <i className="fa-brands fa-facebook fa-stack-1x"></i>
                      </span>
                      <span className="fa-stack" style={ {verticalAlign:'top'} }>
                        <i className="fa-regular fa-circle fa-stack-2x"></i>
                        <i className="fa-brands fa-twitter fa-stack-1x"></i>
                      </span>
                      <span className="fa-stack" style={ {verticalAlign:'top'} }>
                        <i className="fa-regular fa-circle fa-stack-2x"></i>
                        <i className="fa-brands fa-linkedin-in fa-stack-1x"></i>
                      </span>
                      <span className="fa-stack" style={ {verticalAlign:'top'} }>
                        <i className="fa-regular fa-circle fa-stack-2x"></i>
                        <i className="fa-brands fa-internet-explorer fa-stack-1x"></i>
                      </span>
                </p>
            </section>
            <section className='col-12 col-md-6 col-lg-4'>
                <h2>ABOUT FREELANCER</h2>
                <p className="m-0">Freelance is a free to use, licensed Bootstrap theme created by Marwan Ahmed</p>
            </section>
          </section>
         
      </main>
      <footer className="p-3 text-white text-center">
        Copyright © Your Website 2021
      </footer>
    </>
}