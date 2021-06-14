import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const CandidateItem = (props) => {
  const approveCandidate = () => {
    props.decideCandidate(true, props.candidate.id)
  }

  const rejectCandidate = () => {
    props.decideCandidate(false, props.candidate.id)
  }

  return <ListItem>
  <ListItemText
    primary={props.candidate.name}
  />
  <ListItemSecondaryAction>
    <IconButton onClick={approveCandidate}>
      <ThumbUpIcon />
    </IconButton>
    <IconButton onClick={rejectCandidate}>
      <ThumbDownIcon />
    </IconButton>
  </ListItemSecondaryAction>
</ListItem>
}

export default CandidateItem