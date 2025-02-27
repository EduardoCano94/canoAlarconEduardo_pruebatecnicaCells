import { css } from "lit";

export const Styles = css`
  :host {
    display: block;
    font-family: 'Arial', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #202329;
  }

  h1 span {
    color: #19b5fe;
  }

  .content {
    margin-bottom: 40px;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: #3c3e44;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;