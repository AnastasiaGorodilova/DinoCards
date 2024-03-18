import './404.css'

export default function NoMatch() {

    return (

        <main className='main'>
            <h3>Oops! It looks like we dropped all the cards </h3>
            <p>404 Page Not Found</p>
            <img src="../public/404.png" alt="404" className='noMatchImg' />
        </main>
    )
}