import React from "react";

import {styled} from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Search from "@mui/icons-material/Search";


const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    color: theme.palette.text.secondary,
    height: '100%',
    '& .MuiOutlinedInput-notchedOutline' : {
        borderColor: theme.palette.grey['100'],
    }
}));

interface OutlinedSearchBoxProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    borderRadius: string,
}

export default function OutlinedSearchBox ({search, setSearch, borderRadius = '15px'} : OutlinedSearchBoxProps) {

    const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearch(e.target.value.toString().toLowerCase())
    }

    return (
        <FormControl variant="standard" fullWidth dir={'rtl'}
                     sx={{height: '100%', maxHeight: '45px', width: '100%', border: 0, borderRadius: borderRadius, backgroundColor: 'grey.100'}}>

            <StyledOutlinedInput id="search"
                                 value={search}
                                 onChange={handleSearch}
                                 sx={{borderRadius: borderRadius}}
                                 placeholder={'جستجو'}
                                 endAdornment={<InputAdornment position="end"> <Search /> </InputAdornment>} />
        </FormControl>
    )
}
