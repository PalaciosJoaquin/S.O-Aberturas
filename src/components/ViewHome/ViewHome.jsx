import React from 'react';
import './ViewHome.scss';
import { Link } from 'react-router-dom';

const ViewHome = () => {
    return (
        <section className="home">
            <div className="home__divs">
                <div className="home__divs__text">
                    <h2>Innovaciones en Aberturas</h2>
                    <p>
                        Somos una empresa líder en el diseño, fabricación e instalación de aberturas de aluminio de la mejor calidad, comprometida con la excelencia en la calidad y la innovación tecnológica. Fundada en 2003, nuestra empresa se ha consolidado como un referente en el sector, ofreciendo productos y servicios que superan las expectativas de nuestros clientes.
                    </p>
                </div>
                <div className="home__divs__img">
                    <img src="/img/fondo.jpg" alt="Innovaciones en Aberturas" />
                </div>
            </div>
            <div className="home__divs">
                <div className="home__divs__text">
                    <h2>Misión y Visión</h2>
                    <p>
                        Nuestra misión es proporcionar soluciones de alta calidad en aberturas y que no solo cumplan con los más altos estándares de seguridad y durabilidad, sino que también aporten valor estético y funcional a cada espacio. Nos esforzamos por ser la primera elección de nuestros clientes a través de la innovación continua, la atención al detalle y el compromiso con la satisfacción del cliente.
                    </p>
                    <p>
                        Nuestra visión es ser la empresa de referencia en el sector de aberturas en Mar del Plata, conocida por nuestra capacidad para adaptarnos a las necesidades del mercado y superar las expectativas con productos y servicios de primera clase.
                    </p>
                </div>
                <div className="home__divs__img">
                    <img src="/img/fondo.jpg" alt="Misión y Visión" />
                </div>
            </div>
            <h2>Productos y Servicios</h2>
            <div className="home__categories">
                <div className="home__category">
                    <h3>Ventanas</h3>
                    <p>
                        Ofrecemos una amplia gama de ventanas diseñadas para proporcionar un excelente trabajo. Desde modelos de aluminio y PVC hasta opciones de alta calidad, nuestras ventanas están fabricadas para resistir a lo largo del tiempo y mejorar el confort de los espacios.
                    </p>
                </div>
                <div className="home__category">
                    <h3>Piel de Vidrio</h3>
                    <p>
                        Nuestra línea de pieles de vidrio proporciona soluciones arquitectónicas modernas y elegantes, ideales para edificios comerciales y residenciales. Estos sistemas de fachada permiten una gran cantidad de luz natural, reduciendo el consumo energético y creando ambientes luminosos y abiertos.
                    </p>
                </div>
                <div className="home__category">
                    <h3>Barandas</h3>
                    <p>
                        Diseñamos y fabricamos barandas funcionales y estéticas para escaleras, balcones y terrazas. Disponibles en una variedad de materiales, incluyendo acero inoxidable, vidrio templado y aluminio, nuestras barandas cumplen con los estándares de seguridad más rigurosos y añaden un toque de sofisticación a cualquier espacio.
                    </p>
                </div>
                <div className="home__category">
                    <h3>Frente Integral</h3>
                    <p>
                        Nuestros frentes integrales ofrecen soluciones completas para la entrada de edificios y residencias. Combinamos diseño y funcionalidad para crear fachadas que no solo protegen contra el acceso no autorizado sino que también realzan la apariencia exterior del inmueble.
                    </p>
                </div>
                <div className="home__category">
                    <h3>Mamparas de Baños</h3>
                    <p>
                        Disponemos de una variedad de mamparas de baño que combinan elegancia y funcionalidad. Fabricadas con vidrio templado y perfiles de alta calidad, nuestras mamparas son resistentes a la corrosión y fáciles de mantener, ofreciendo una solución práctica para cualquier baño.
                    </p>
                </div>
                <div className="home__category">
                    <h3>Puertas</h3>
                    <p>
                        Nuestras puertas están diseñadas para satisfacer todas las necesidades, desde puertas interiores y exteriores hasta soluciones de alta seguridad. Garantizamos durabilidad, estilo y funcionalidad.
                    </p>
                </div>
            </div>
            <Link className="home__button" to="/contacto">Contactate con nosotros</Link>
            <p>
                Para más información sobre nuestros productos y servicios, no dudes en ponerte en contacto con nosotros. En S.O Aberturas, estamos aquí para ayudarle a hacer realidad su visión con soluciones de aberturas y cerramientos que combinan calidad, estilo y funcionalidad.
            </p>
        </section>
    );
};

export default ViewHome;
