import styled from "styled-components";

const HomeStyle = styled.div`
    
    color: #202020;
    grid-area: outlet;
    grid-column-start: 1;
    grid-column-end: 7;
    box-sizing: border-box;
    margin: 40px 0;

    .design-card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 50vh;
        
        align-items: center;
        
        overflow: hidden;
        margin-bottom: 20px;
        .design-text{
            padding: 0 40px;
            width: 100%;
            h2{
                font-size: 6vh;
            }
            h4{
                font-size: 3vh;
            }
            p{

                font-size: 2.5vh;
                text-align: justify;
            }
        }
        img{
            height: 100%;
        }
    }
    .web-pages{
  
        h2{
            text-align: center;
            margin-top: 80px;
        }
        h4{
            color: #a004e9;
            font-size: x-large;
            margin-bottom: 0;
        }
        .work-card-container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .work-card{
            display: flex;
            flex-direction: column;
            background-color: #444444;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
            width: 50vh;
            padding: 20px;
            p{
                color: white;
                text-align: justify;
            }
        }
        img{
            
        }

    }
    }

    @media (max-width: 480px){
        a{
            color: white;
        }
    }
    
`

export {HomeStyle};