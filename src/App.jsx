import React, { useState } from 'react'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const App = () => {
    const [isFlipped,setIsFlipped] =useState(false);

    function handleFlip(){
        setIsFlipped(!isFlipped);
    } 
  return (
    <div style={{ display:'flex',justifyContent:'center', alignItems:'center'}}>
     <Card variant="outlined" sx={{display:'flex',perspective:'1000px',margin:20,padding:15,alignItems:'center'
     ,justifyContent:'center',backgroundColor:'darkgreen',
     }}>
        <div style={{  transformStyle: 'preserve-3d',
            transition: 'transform 1s',
            transform: isFlipped ? 'rotateY(180deg)' : '',
            display:'flex',
            height:'100%',
            width:'100%' 
            
  }}>
        <div style={{backfaceVisibility:'hidden'}}>
      <TextField variant='standard' type='email'  sx={{color:'white',width:400,margin:1,}} label="Email" required >
        
      </TextField> 
      <TextField variant='standard' type='password' sx={{color:'white',width:400,margin:1,}} label="Password" required >
        
      </TextField>  
      <div>
        <Button variant='contained' sx={{marginTop:2,}}>
            Login 
        </Button>
        
        </div>
        <div>
        <Button variant='contained' sx={{marginTop:2,}} onClick={handleFlip}>
           you wanna Signup?
        </Button>
        
        </div>
        </div>
   

     {/* for signup */}
    <div style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden', position:'absolute'
    }}>
    <TextField variant='standard' type='text' sx={{color:'white',width:400,margin:1,}} label="Full Name" required >
        
        </TextField> 
      <TextField variant='standard' type='email'  sx={{color:'white',width:400,margin:1,}} label="Email" required >
        
      </TextField> 

      <TextField variant='standard' type='password' sx={{color:'white',width:400,margin:1,}} label="Password" required >
        
      </TextField>  
      <div>
        <Button variant='contained' sx={{marginTop:2,}}>
            Signup  
        </Button>
        </div>
        <div>
        <Button variant='contained' sx={{marginTop:2,}} onClick={handleFlip}>
           you wanna Login?
        </Button>
        
        </div>
      </div>
      </div>
      </Card>

    </div>
  )
}

export default App