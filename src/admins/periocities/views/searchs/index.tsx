import { useEffect, useState } from "react"
import { type PeriocityResponse } from "../../domain";
import { findAll } from "../../infrastructure/PeriocityRepository"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const index = (): JSX.Element => {

  const [periocities, setPeriocities] = useState<PeriocityResponse[]>()

  useEffect(() => {
    findAll().then((response) => {
      setPeriocities(response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Row className="pt-2">
        <Col xs={12}>
          <Card>
            <Card.Header>Listado de Periocities</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    periocities?.map(periocity => (
                      <tr key={periocity.id}>
                        <td>{periocity.id}</td>
                        <td>{periocity.name}</td>
                        <td>{periocity.description}</td>
                        <td>
                          <Badge pill bg={periocity.state ? 'success' : 'danger'}>
                            {periocity.state ? 'Activo' : 'Eliminado'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default index