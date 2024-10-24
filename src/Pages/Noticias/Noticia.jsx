import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/GlobalContext';
import Titulo from '../Galeria/Titulo';
import Descripcion from '../Galeria/Descripcion';

const NoticiaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;  // Aumentar el espacio entre elementos
    padding: 150px 20px;  // Ajustar el padding para un mejor espaciado
    text-align: center;
    width: 100%;
    height: auto;
    background-color: #f9f9f9;  // Fondo sutil para resaltar la noticia
    border-radius: 10px;  // Bordes redondeados
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  // Sombra para dar profundidad

    @media (max-width: 768px) {
    padding: 13vh 1vw 10vh 1vw; /* Padding relativo al tamaño de la pantalla */
  }
`;

const ContentDiv = styled.section`
    max-width: 80vw;
    font-size: 1rem;  // Ajustar el tamaño de fuente para una mejor legibilidad
    color: #333;  // Color de texto oscuro para el contenido
    line-height: 1.5;  // Aumentar el espacio entre líneas
`;


const NoticiaAuthor = styled.p`
    font-size: 0.9rem;
    color: #777;
    margin: 5px 0;  // Espacio ajustado
`;

const NoticiaDate = styled.p`
    font-size: 0.9rem;
    color: #777;
    margin: 5px 0;  // Espacio ajustado
`;

const NoticiaImage = styled.img`
    max-width: 50%;  // Aumentar el ancho máximo de la imagen
    height: auto;  // Mantener la proporción de la imagen
    border-radius: 10px;  // Bordes redondeados para la imagen
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  // Sombra sutil para la imagen

    @media (max-width: 768px) { // Cambia a móviles
        max-width: 100%;  // Aumentar el ancho máximo de la imagen
    }
`;

const NoticiaCenter = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    max-width: 70%;

    @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RegresarBoton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const Noticia = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Inicializa el hook para la navegación
    const { id } = location.state || {}; // Obtiene el ID de la noticia desde el estado

    const { noticias } = useGlobalContext();

    // Busca la noticia correspondiente al ID
    const noticia = noticias.find(n => n.id === id);

    const handleRegresarClick = () => {
        navigate('/noticias'); // Cambia '/noticias' a la ruta correcta para regresar a la lista de noticias
    };

    return (
        <NoticiaContainer>
            <NoticiaCenter>
                <Titulo titulo={noticia.title}/>
                <Descripcion descripcion={noticia.explanation}/>
                <NoticiaAuthor>Por: {noticia.author}</NoticiaAuthor>
                <NoticiaDate>{new Date(noticia.date).toLocaleDateString()}</NoticiaDate>
                <NoticiaImage src={noticia.url} alt={noticia.title} />
                <ContentDiv>{noticia.content}</ContentDiv>
                <RegresarBoton onClick={handleRegresarClick}>Regresar a Noticias</RegresarBoton>
            </NoticiaCenter>
        </NoticiaContainer>
    );
};

export default Noticia;