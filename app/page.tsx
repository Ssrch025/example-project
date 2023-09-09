'use client'
import { Box, Typography, TextField, Stack, Button } from '@mui/material'
import React, { useState } from 'react'

const FirstPage = () => {
  const [id, setId] = useState<string>("")
  const [confirm, setConfirm] = useState<boolean>(false)

  const handleChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setId(value)
    setConfirm(false)
  }

  const handleClickConfirm = () => {
    setConfirm(true)
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        my={5}
      >
        <Typography variant='h3'>
          Hello World!
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: 'grey',
            mt: 2,
          }}
        >
          This is example Project
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          my={5}
        >
          <TextField
            variant='outlined'
            placeholder='Your name ID'
            size='small'
            value={id}
            onChange={handleChangeTextField}
            sx={{
              mx: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px"
              }
            }}
          />
          <Button
            variant='contained'
            onClick={handleClickConfirm}
            sx={{
              "&.MuiButton-root": {
                borderRadius: "8px"
              }
            }}
          >
            Confirm
          </Button>
        </Box>
        <Typography variant='body1'>
          {confirm ? id : null}
        </Typography>
      </Box>
    </>
  )
}

export default FirstPage