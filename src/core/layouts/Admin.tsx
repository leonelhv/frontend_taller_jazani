import Container from "react-bootstrap/Container"
import { Menu } from "./components/Menu"
import { Outlet } from "react-router-dom"

const Admin = (): JSX.Element => {
  return (
    <>
      <Menu />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Admin