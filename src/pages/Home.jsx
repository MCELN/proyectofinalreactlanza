import style from './css/home.module.css';

const Home = () => {
    return (
        <div>
            <h2>Perfumes de Nicho</h2>
            <div className={style.brands}>
                <p>
                    Explore los orígenes de la casa de perfumes de lujo que ha establecido un legado de aromas
                    inigualables durante siglos. Su gama de fragancias hipnóticas para hombre y mujer están
                    dedicadas a la artesanía de aromas únicos elaborados con ingredientes exquisitos.
                </p>
                <img src="../assets/logoCreed.png" alt="Logo Cread" />
            </div>
            <div className={style.brands}>
                <img src="../assets/logoParfumsDeMarly.png" alt="Logo Cread" />
                <p>
                    Fragancias como ninguna otra. Una auténtica perfumería que rinde homenaje al savoir-faire
                    perfumista francés sin atarse a las viejas costumbres. Composiciones audaces que se atreven a
                    desafiar las normas. El arte de vivir del Château de Marly se captura en cada aroma refinado.
                    Preciosos ingredientes. Cada botella, una zambullida en el esplendor de lo invisible.
                </p>
            </div>
            <div className={style.brands}>
                <p>
                    Una fragancia es una materia prima natural y viva, que continúa su maceración.<br/>La fragancia que compres hoy ganará fuerza y redondez a lo largo de su conservación. Tiempo y maceración: El secreto de un elixir.
                </p>
                <img src="../assets/logoMontaleParis.png" alt="Logo Cread" />
            </div>
        </div>
    )
}

export default Home
