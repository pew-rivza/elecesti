import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function AddPositionForm() {

    return (
        <>
            <Stack spacing={2} direction="row">
                <TextField
                    label="Позиция"
                    id="position"
                    variant="outlined"
                    size={"small"}
                />

                <TextField
                    label="Ссылка"
                    id="link"
                    variant="outlined"
                    size={"small"}
                />

                <TextField
                    label="Цена"
                    id="amount"
                    variant="outlined"
                    size={"small"}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">₽</InputAdornment>,
                    }}
                />

                <IconButton color="secondary" aria-label="upload picture" component="span">
                    <AddOutlinedIcon />
                </IconButton>
            </Stack>
            <br/>
            <Button variant="contained" color={"primary"}>Добавить</Button>
        </>


    );
}

export default AddPositionForm;