

export default function Cards({src}){

    return(
        <div  className="p-2 col-12 col-md-6 col-lg-4">
                    <section className="inner position-relative">
                      <div className="image-container">
                        <img src={src} className="rounded w-100" alt="poert"/>
                      </div>
                      <div className="inner-icon d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus fs-1"></i>
                      </div>
                    </section>
                  </div>
    )
}