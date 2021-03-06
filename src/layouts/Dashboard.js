import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import CandidateList from "../pages/CandidateList"
import EmployeeList from '../pages/EmployeeList'
import EmployerList from "../pages/EmployerList"

export default function Dashboard() {
    return (
        <div>
            <Grid> 
                <Grid.Row>
                    <Grid.Column width={4}>

                    </Grid.Column>
                    <GridColumn width={12}>
                        <CandidateList/>
                        <EmployeeList/>
                        <EmployerList/>
                    </GridColumn>
                </Grid.Row>
            </Grid>

        </div>
    )
}
