
export default function Contact(){

     

    return <>
      
      <section className="text-white d-flex justify-content-center align-items-center flex-column p-5 my-5">
            <h1 className="my-2 portoflio-h2 pb-3">Contact Component</h1>
            
           <section className="d-flex container">
                <form action="" className="w-50 mx-auto">
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="userName"/>
                <label for="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="Age"/>
                <label for="floatingInput">User Age</label>
                </div>

                <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="userEmail"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>
                <button onClick={(e)=>{ e.preventDefault(); }} className="btn btn-info text-white my-3">Send Message</button>
                </form>
                </section>
         </section>
    </>
}