import { css } from "lit";

export const Styles = css`
.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 16px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    max-width: 250px;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .card--alive {
    border-left: 5px solid #55cc44;
  }

  .card--dead {
    border-left: 5px solid #d63d2e;
  }

  .card--unknown {
    border-left: 5px solid #9e9e9e;
  }

  .card__title {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 10px;
    color: #202329;
    font-weight: bold;
  }

  .card__body {
    margin-bottom: 15px;
  }

  .card__body p {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #3c3e44;
  }

  .card__img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    object-fit: cover;
  }
`;