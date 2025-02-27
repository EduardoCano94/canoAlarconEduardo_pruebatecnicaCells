import { css } from "lit";

export const Styles = css`
     .species-title {
    font-size: 1.8rem;
    color: #202329;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #3c3e44;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
`;