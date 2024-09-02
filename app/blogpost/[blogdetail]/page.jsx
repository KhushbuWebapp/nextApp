import { Box, Button, Container, Stack } from '@mui/material'
import React from 'react'
import Link from 'next/link'
const page = ({params}) => {
  return (
    <Container>
      <Box>
        
          <Stack variant="h1" sx={{
            fontSize:"2rem",
          //  marginBottom:"1rem",
          }}><b>Blog : {params.blogdetail}</b></Stack> <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione facilis impedit maxime delectus incidunt earum quis possimus, saepe ullam nam quia at laudantium animi, quod doloremque illo optio provident assumenda, corrupti ipsam explicabo expedita facere obcaecati. Atque harum voluptates quisquam neque dolores a quibusdam enim in eveniet laborum, cum modi eaque aliquam explicabo ullam beatae consectetur possimus libero doloribus nulla reprehenderit magnam distinctio voluptas. Repellendus laboriosam esse nostrum rerum. Reprehenderit quidem laborum quas quod itaque alias, corporis explicabo quisquam veritatis aliquid facilis sunt ullam ratione dolorum at incidunt delectus dolor soluta debitis nobis consequatur magni? Molestiae placeat porro aperiam.
        </p>
        <Link href={"/blogpost"}>
        <Button variant='contained' className=' bg-cyan-800 float-end mt-6'>Back</Button>
        </Link>
        
      </Box>
    </Container>
  )
}

export default page
