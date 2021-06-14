import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { List } from '@material-ui/core';
import CandidateItem from './CandidateItem';


const CandidatesList = (props) => {
  return <Card>
    <CardContent>
      <Typography variant={'h5'} gutterBottom>
        Lista de candidatos
    </Typography>
      <List>
        {props.candidates.map(candidate => {
          return <CandidateItem candidate={candidate} decideCandidate={props.decideCandidate}/>
        })}
      </List>
    </CardContent>
  </Card>
}

export default CandidatesList