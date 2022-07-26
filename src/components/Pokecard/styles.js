import styled from "styled-components"
import pokebola from "../../assets/images/pokebola.png"
import { theme } from "../../styles/theme"

export const PokecardContainer = styled.div`
  width: 27.5rem;
  height: 13.125rem;
  border-radius: 12px;

  background: ${theme["green-light"]};

  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 1fr 70px;
  grid-template-areas:
    "info image"
    "action action";

  position: relative;
`

export const InfoContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  font-family: "Inter";
  font-weight: 700;
  grid-area: info;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const BadgeContainer = styled.div`
  margin: 5px 0;
  display: flex;
  gap: 0 5px;
  flex-wrap: nowrap;
`

export const ImageContainer = styled.div`
  width: 13.125rem;
  position: relative;
  background: url(${pokebola}) center;
  grid-area: image;
`

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;

  position: absolute;
  inset: -50px 0;
`

export const ActionContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  grid-area: action;
`

export const BaseButton = styled.button`
  width: 146px;
  height: 38px;
  border: 0;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const DetailsButton = styled(BaseButton)`
  color: ${theme.white};
  text-decoration: underline;
  background: transparent;
`

export const CaptureButton = styled(BaseButton)`
  background: ${theme.white};
  color: ${theme["black-medium"]};
  font-weight: 400;
`
export const DeleteButton = styled(BaseButton)`
  background: ${theme.red};
  color: ${theme.white};
  font-weight: 400;
`
