import styled from 'styled-components';

const ContactFormStyled = styled.div`
 
  color: #202020;
  width: 100%;
  grid-area: outlet;
  grid-column-start: 2;
  grid-column-end: 6;
  box-sizing: border-box;

  h1 {
    /* text-align: center; */
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, textarea {
    width: 40%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    resize: vertical;
    height: 150px;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;

 
    border: none;
    border-radius: 5px;
    cursor: pointer;


  }



  .social-icons {
    text-align: center;
    margin-top: 20px;

    a {
      margin: 0 10px;
      color: #b32e2e;
      font-size: 24px;
      text-decoration: none;

      &:hover {
        color: #0073e6;
      }
    }
  }
`;

export default ContactFormStyled;
