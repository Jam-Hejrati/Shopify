import {Button} from "@mui/material";
export default function FormButton(){
  return(
      <>
        <Button variant="contained" type="submit" sx={{
          width: 220,
          marginTop: 2,
        }}>Submit</Button>
      </>
  )
}