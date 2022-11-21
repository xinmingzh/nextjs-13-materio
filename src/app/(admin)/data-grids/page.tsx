'use client'

import DataGridDemo from 'src/views/datagrids/DataGridDemo'
import BasicExampleDataGrid from 'src/views/datagrids/BasicExampleDataGrid'
import Box from '@mui/material/Box'

const DataGrids = () => {
  return (
    <Box display='flex' flexDirection='column' gap={4}>
      <DataGridDemo />
      <BasicExampleDataGrid />
    </Box>
  )
}

export default DataGrids
