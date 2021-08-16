import React, { useState,useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CandidateService from '../Services/CandidateService'

export default function Candidate() {

    const [candidates, setCandidates] = useState([])
     
    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=>setCandidates(result.data.data))
        
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row>
                                <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
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
