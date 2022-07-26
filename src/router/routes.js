import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../layout/DefaultLayout"
import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Pokedex } from "../pages/Pokedex"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route element={<Home />} index exact path='/' />
          <Route element={<Pokedex />} exact path='/pokedex' />
          <Route element={<Details />} exact path='/details/:pokemon' />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
