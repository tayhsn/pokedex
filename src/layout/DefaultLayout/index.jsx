import { Outlet, useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { LayoutContainer } from "./styles"

export const DefaultLayout = () => {
  const pageParams = useParams()
  console.log(pageParams)

  return (
    <LayoutContainer>
      <Header page={pageParams.pokedex} />
      <Outlet />
    </LayoutContainer>
  )
}
