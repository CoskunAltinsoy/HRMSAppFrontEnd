import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../Services/EmployerService'

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(()=>{
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getJobAdvert().then(result => setJobAdverts(result.data.data))
}, [])
    //tablolar düzeltilecek
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Firma Adı</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                       employers.map((employer)=>(
                        <Table.Row>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.email}</Table.Cell>
                            <Table.Cell>{employer.firstName}</Table.Cell>
                            <Table.Cell>{employer.lastName}</Table.Cell>
                            <Table.Cell>{employer.phoneAddress}</Table.Cell>
                            <Table.Cell>{employer.webAddress}</Table.Cell>
                        </Table.Row>                     
                       ))
                           
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            
        </div>
    )
}
