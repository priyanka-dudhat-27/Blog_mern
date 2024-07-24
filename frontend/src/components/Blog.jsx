/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Card,CardHeader,CardMedia,Avatar,CardContent,Typography} from '@mui/material'

const Blog = ({title,description,image,user}) => {
  return (
    <Card sx={{width:'40%',margin:'auto',mt:3,boxShadow:'5px 5px 10px #ccc','&:hover':{boxShadow:"10px 10px 20px #ccc"}}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {user.name[0]}
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        sx={{objectFit:'contain'}}
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Blog