import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '../../public/Assets/Images/common_question/expand.svg'
import getQuestion from '../../data/common_questions/Questions_data';
import { SvgIcon } from '@mui/material';

interface propsType{
  category:string
}

const Quetions = (props:propsType) => {
  const {category} = props;
  const values = getQuestion(category);
   return(
    
    <>
    {values.map(item=>{
      return(
        <Accordion key={item.title} disableGutters square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            padding:'16px',
            '& .MuiAccordionSummary-content' : {
              margin : 0
            }
          }}
        >
          <SvgIcon sx={{width:"32px",height:"32px",color:'info.300',backgroundColor:'info.100',padding:'5px',borderRadius:'50%'}}><path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path></SvgIcon>
          <Typography fontWeight={600} sx={{color:'grey.600',marginLeft:'12px'}}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            padding:'16px 64px'
          }}>
          <Typography>
            {item.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    })}
    </>
   )
}
export default Quetions