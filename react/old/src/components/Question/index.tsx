import {Box} from '@mui/material'
import Option from './Option.tsx'
const Question = () => {




    return (
        <>
         <Box
            style={{
                fontSize: '1rem',
                backgroundColor: 'rgb(219 234 254)',
                borderRadius: '5px',
                padding: '8px',
                width: '100px'
            }}
         >

             Cau 1
         </Box>
         <Box style={{
                 fontSize: '1rem',
                 backgroundColor: 'rgb(219 234 254)',
                 borderRadius: '5px',
                 padding: '8px',
                 width: '100px'
             }}
            >Test 1
         </Box>
        <Option/>
        <Option/>
        <Option/>
        </>
    )
}

export default Question