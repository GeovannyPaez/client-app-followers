import React from 'react'
import { TextField } from "@mui/material";
import {InputAdornment} from "@mui/material";
import {Search} from '@mui/icons-material'
import { Stack } from '@mui/system';
export const Searcher = ({onChange,inputValue,onSearch}) => {
  return (
    <Stack justifyContent={'center'}>
        <TextField
          sx={{
            width: "80%",
            margin: "0 auto",
          }}
          onChange={onChange}
          type="search"
          autoFocus
          autoComplete="off"
          label="Nombre o Email"
          id="outlined-basic"
          value={inputValue}
          placeholder="user@gmail.com"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <Search
                onClick={onSearch}
                  fontSize="small"
                //   onClick={onHandleSearch}
                  sx={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
        />
    </Stack>
  )
}
