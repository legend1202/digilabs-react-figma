import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  #root{
    text-align:center
  }
  .App {
    text-align: center;
    position: relative;
    width: 648px;
    height: 704px;
    margin: 160px auto;
  }
  
  .App-logo{
    fill:${({ theme }) => theme.text};
    width:'180px';
    height:'33.6px';
    top: 7.2px;
    left:6px;
    margin-bottom: 32px;
  }
  .App-logo path{
    fill:${({ theme }) => theme.text};
  }
  .content{
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
    border-radius: 10px;
  }
  
  .ctsection{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.ctsectionBgcolor};
    padding: 24px 48px;
  }
  .baseStepper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#A5ACBA;
  }
  
  .stepNumber{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 32px;
    height: 32px;
    /* background: #437EF7; */
    /* border: 1px solid #2E3545; */
    border: 1px solid #A5ACBA;
    border-radius: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.1px;
  }
  .stepLetter{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    margin:8px;
  }
  .active>.stepNumber{
    color:#A5ACBA;
    color:${({ theme }) => theme.stepNumberC};
    background-color:${({ theme }) => theme.stepNumberBgC};
    border: 1px solid #2E3545;
  }
  .active>.stepLetter{
    color: #437EF7;
    background-color:transparent;
  }
  
  .mainForm{
    text-align: left;
    padding: 32px 48px;
    background-color: ${({ theme }) => theme.mainFormBgC};
  }
  .input-group{
    margin-top: 24px;
  }
  .input-group>label{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.text};
  }
  .input-group>input{
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 12px 16px;
    margin: 8px 0px;
    height: 46px;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid #2E3545;
    border-radius: 6px;
  }
  .input-group>.checkbox{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.background};
    border-radius: 5px;
  }
  .input-group>label{
    margin: 8px auto 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.text};
  }
  .inputWidth{
    width: 552px;
  }
  .flex-between{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .width-half{
    width: 260px;
  }
  .small-label{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.text};
  }
  .wrapper{
    position:relative;
  }
  .ctButton{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 16px 48px;
    gap: 10px;
    background-color: ${({ theme }) => theme.ctBtnBgc};
  }
  
  .btn{
    padding: 12px 18px;
    gap: 6px;
    background: #437EF7;
    color: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
    border: none;
    border-radius: 6px;
  }
  .icon{
    width: 100%;
    height: 100%;
  }
  .icon-info{
    height: 2rem;
    width: 2rem;
    padding: 4px;
    position: absolute;
    box-sizing:border-box;
    top: 2.5em;
    right:12px;
    color:${({ theme }) => theme.text};
  }

  @media screen and (max-width: 768px) {
    .App {
      width: 100%;
      margin:auto;
      height:auto;
    }
    .App-logo{
      margin: 55.2px auto 15.2px;
    }
    .ctsection{
      padding: 12px 24px;
    }
    .content{
      margin:24px;
    }
    .inputWidth, .width-half{
      width:100%;
    }
    .flex-between{
      display: block;
    }
    .mainForm{
      padding:24px;
    }
    .input-group{
      margin-top: 12px;
    }
    input{
      margin:0px
    }
    label:last-child{
      font-size: 12px;
      color: #A5ACBA;
    }
    .ctButton{
      justify-content: center;
      padding: 16px 0px;
    }
    
    .btn{
      padding: 12px 18px;
      width:100%;
    }
  }
  
`;

export default GlobalStyle;