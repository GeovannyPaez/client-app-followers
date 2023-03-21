import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export const CardUserSearcherSkeleton = ({length=1,marginTop = 1}) => 
    Array.from(new Array(length)).map((item, index) => (
    
     <Stack key={index} flexDirection={'row'} width={'100%'} alignItems={'center'} marginTop={marginTop} gap={2}>
            <Skeleton variant='circular' width={50} height={50}/>
            <Skeleton variant='rounded' width={'100%'} height={70}/>
    </Stack>

  ))

