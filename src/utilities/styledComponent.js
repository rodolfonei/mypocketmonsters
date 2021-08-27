import styled from '@emotion/styled';

export const PokeMainContainer = styled.div`
    position: relative;
    font-family: 'Exo 2', sans-serif;
`;

// Header
export const PokeHeaderImg = styled.img({
    position: 'absolute',
    top: '2%',
});

export const PokeHeader = styled.header(props => ({
  display: 'flex',
  width: '100%',
  height: 'auto',
  minHeight: '30vh',
  color: 'purple',
  backgroundColor: 'grey',
  justifyContent: 'center',
  alignContent: 'center'
}));

// Pokemon List

export const PokeBoxList = styled.div({
    backgroundColor: '#19072d',
    border: 'solid #19072d',
    borderRadius: '12px',
    color: '#ffffff',
    display: 'block',
    textDecoration: 'none',
    overflow: 'hidden',
    transformOrigin: 'center 60%',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    position: 'relative',
    cursor: 'pointer',
    ":hover": {
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 40%)',
        transform: 'scale(1.05)',
        zIndex: 1,
    },
});

export const PokeBoxListContainerImage = styled.div`
    border-radius: inherit;
    overflow: hidden;
    position: relative;
    padding: 1rem;
    width: 100%;
    height: 300px;
    background-color: #ffffff;
    @media (max-width: 420px) {
        height: 200px;
    }
`;

export const PokeBoxListInnerImage = styled.img({
    transition: 'transform 0.2s ease-in-out',
    width: '100%',
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    ":hover": {
        transform: 'scale(1.05)',
    },
});

export const PokeBoxListInnerTitle = styled.p`
    text-align: center;
    padding: 1rem;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Exo 2', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    @media (max-width: 420px) {
        font-size: 16px;
    }
`;

export const PokeButtonLoadMore = styled.div`
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    background-color: #6523b6;
`;

export const PokeButtonText = styled.p`
    font-size: 24px; 
    background-color: #19072d;
    color: #ffffff;
    border-radius: 4px;
    padding: 0px 10px;
    margin: 10px 0px;
    transform: skewX(-10deg);
    cursor: pointer;
`;

export const PokeContainerList = styled.div`
    position: absolute;
    top: 5%;
`;

// Pokemon details

export const PokeDetailsContainer = styled.div`
    position: absolute;
    background-image: linear-gradient(180deg, #4a1885 0%, #6523b6, rgba(238,114,33,0) 100%);
    top: -5rem;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 40px 40px 0px 0px;
    padding: 1rem;
    align-items: center;
    display: flex;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`;

export const PokeDetailsImg = styled.img`
    max-width: 500px;
    max-height: 500px;
    padding: 1rem;
    align-self: flex-start;

    @media (max-width: 420px) {
        align-self: center;
    }
`;

export const PokeDetailsCommon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const PokeDetailsName = styled.p`
    font-size: 24px; 
    background-color: #f9c921;
    color: #220a3d;
    border-radius: 4px;
    padding: 0px 10px;
    margin: 10px 0px;
    transform: skewX(-10deg);
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
`;

export const PokeDetailsBoxStatus = styled.div`
    background: #ffffff;
    border-radius: 10px;
    display: ${props =>
        props.flex ? 'flex' : 'inline'
    };
    padding: 1rem;
    margin: 1rem 0px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
`;

export const PokeDetailsBoxStatusUl = styled.div`
    padding: 1rem;
    list-style-type: none;
`;

export const PokeDetailsInfo = styled.div`
    display: flex;
    width: 100%;
`;

export const PokeDetailsSprites = styled.div`
    display: flex;

    @media (max-width: 420px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
