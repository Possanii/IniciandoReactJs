import './Rodape.css'

const Rodape = () => {

    return (
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href='Facebook.com' target='_blank'>
                            <img src="/images/fb.png" alt="Facebook" />
                        </a> 
                    </li>
                    <li>
                        <a href='Instagram.com' target='_blank'>
                            <img src="/images/ig.png" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href='Twitter.com' target='_blank'>
                            <img src="/images/tw.png" alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo" />
            </section>
            <section>
                <p>Desenvolvido por Gustavo Piovesan</p>
            </section>
        </footer>
    )
}

export default Rodape