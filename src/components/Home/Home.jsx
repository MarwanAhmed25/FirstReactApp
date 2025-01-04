import avatar from '../../assets/avataaars.svg'

export default function Home(){


    return <>
    <section className="text-white d-flex justify-content-center align-items-center flex-column vh-100 hero">
    <div className="image-container w-25 my-2">
                <img src={avatar} class="w-100" alt="avatar"/>
            </div>
            <h1 className="my-2">Start Framwork</h1>
            <p className="my-2">Graphic Artist - Web Designer - Illustrator</p>
            </section>
    </>
}