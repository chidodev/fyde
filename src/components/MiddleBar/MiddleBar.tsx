import { useApp } from '@/context/AppContext';
import { items } from '@/utils/data';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, Typography } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { TbDevices } from 'react-icons/tb'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ }) => ({
  '&:before': {
    display: 'none',
  },
  width: "100%",
  color: "black",
  background: 'transparent'
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  color: "grey",
  fontWeight: "bold",
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: "blue",
    background: "rgb(147 197 253 / 1)",
    padding: '5px',
    borderRadius: "100%"
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  padding: theme.spacing(1),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  color: "#999"
}));

const MiddleBar = () => {
  const [expanded, setExpanded] = useState<string | boolean>('panel1');
  const { middleBar, setMiddleBar } = useApp()
  const [activeSubItem, setActiveSubItem] = useState<string>("")
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      event.preventDefault()
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='bg-[#F1F6FF] min-h-screen w-1/5  hidden xl:flex flex-col'>
      <div className='w-full px-4 flex items-center pt-5 justify-between shadow shadow-slate-300 pb-4'>
        <BiChevronLeft onClick={() => setMiddleBar(!middleBar)} color='blue' size={25} className={`${!middleBar && "rotate-180"} cursor-pointer w-8 h-8 rounded-full hidden xl:flex items-center justify-center bg-[#E3EAFA]`} />
        <span className='font-bold text-2xl text-center'>Project CRM</span>
        <div className='w-10 h-10 cursor-pointer rounded-full flex items-center justify-center bg-blue'>
          <BiPlus size={28} color='white' className='' />
        </div>
      </div>
      <div className="w-full min-h-[calc(100vh_-_10vh)] flex-col flex justify-between items-center">
        <div className='w-full 2xl:px-4 flex flex-col'>
          {
            items.map((item, index) => (
              <Accordion key={index} className='my-2 border-b p-0 border-slate-300' expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id="panel1d-header">
                  <Box className={`flex items-center`}>
                    {item.icon && <item.icon color='grey' className={`mr-2 `} size={25} />}
                    <Typography className={`font-bold ${expanded === ("panel" + index) ? "text-black" : "text-slate-700"} `}>{item.heading}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <ol className='pl-10'>
                    {
                      item.subItems.map((subItem, index) => (
                        <li onClick={() => setActiveSubItem("sub" + index)} className={`my-2 py-1 cursor-pointer ${activeSubItem === ("sub" + index) ? "text-black font-bold" : "text-slate-700"}`} key={index}>{subItem.name}</li>
                      ))
                    }
                  </ol>
                </AccordionDetails>
              </Accordion>
            ))
          }
        </div>
        <button className='w-11/12 2xl:w-10/12 p-4 rounded bg-blue text-white items-center justify-around text-center flex'>
          <BiPlus size={20} />
          <span className='mx-1'>Create New Project</span>
          <TbDevices size={20} className={"text-slate-100"} />
        </button>
      </div>
    </div>
  )
}

export default MiddleBar