import { Synopsis } from '@prisma/client'
import React from 'react'
import DashboardComponent from '../Dashboard/DashboardComponent'

interface Props {
    synopsis:Synopsis[]
}
function SelectedSynopsis({synopsis}:Props) {
  return (
    <>
    
    <DashboardComponent title="Selected Synopsis">
        <>
        
        </>
    </DashboardComponent>
    
    
    </>
  )
}

export default SelectedSynopsis