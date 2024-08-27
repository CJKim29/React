import { Button, IconButton, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

function TestButton() {
    return (
        <div style={{ textAlign: "center" }}>
            <Stack spacing={4} mt={5}>
                <Stack spacing={2} direction='row' justifyContent='center'>
                    <Button variant="text" href='https://google.com'>Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <Stack
                    spacing={2}
                    direction='row'
                    justifyContent='center'  // 수평 가운데 정렬
                    alignItems='center'      // 수직 가운데 정렬
                // sx={{ height: '100vh' }}  // 전체 화면 높이로 설정하여 수직 가운데 정렬
                >
                    <Button variant="contained" color='primary'>Primary</Button>
                    <Button variant="contained" color='secondary'>Secondary</Button>
                    <Button variant="contained" color='error'>Error</Button>
                    <Button variant="contained" color='warning'>Warning</Button>
                    <Button variant="contained" color='info'>Info</Button>
                </Stack>
                <Stack spacing={2} direction='row' justifyContent='center'>
                    <Button variant="contained" size='small'>Small</Button>
                    <Button variant="contained" size='medium'>Medium</Button>
                    <Button variant="contained" size='large'>Large</Button>
                </Stack>

                {/* Icon */}
                <Stack spacing={2} direction='row' justifyContent='center'>
                    <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                    <Button variant="contained"
                        endIcon={<SendIcon />}
                        disableRipple
                        onClick={() => alert("안녕~!")}>Send</Button>
                    <IconButton size='small' color='error'>
                        <SendIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </div>
    );
}

export default TestButton;