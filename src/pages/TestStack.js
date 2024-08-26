import { Box, Divider, Stack } from '@mui/material';
import React from 'react';

function TestStack() {
    return (
        <div>
            <p>Stack Test화면</p>

            <div style={{ padding: '20px' }} >
                <Stack sx={{ border: '1px solid' }} direction='row'
                    spacing={2}
                    divider={<Divider orientation='vertical' flexItem />}>
                    <Box sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '15px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        }
                    }}>BOX 테스트</Box>
                    <Box display='flex'
                        height='100px'
                        width='100px'
                        bgcolor='success.light'
                        p={1.9}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'success.main',
                            }
                        }}>
                        BOX 테스트
                    </Box>
                    <Box sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '15px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        }
                    }}>BOX 테스트</Box>
                </Stack>
            </div>
        </div>
    );
}

export default TestStack;