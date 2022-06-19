import React from 'react';
import './Main.css';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Review from '../review/Review';
import Produto1 from '../../../assets/images/bee_redondo_pequeno.png';
import Produto2 from '../../../assets/images/bee_redondo_pequeno.png';
import Produto3 from '../../../assets/images/bee_redondo_pequeno.png';


function Main(){
    return(
        <div className='container'>

            <Header className='header-main'></Header>

            <section className='home-main' id="home">
                <div className='content'>
                    <h3>Qual será a sua escolha de hoje?</h3>
                    <p>Você não precisa ir longe e nem esperar horas por uma comida, escolha uma opção pertinho de você</p>
                </div>
            </section>

            <section className="menu" id="menu">
                <h1 className="heading"> <span>destaques</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={Produto1}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto2}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                </div>

                </section>

                <Review></Review>

                <Footer className='header-main'></Footer>

        </div>


    )

}
export default Main;