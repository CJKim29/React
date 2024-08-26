import { Box } from '@mui/material';
import React from 'react';

function TestBox() {
    return (
        <div>
            <p>Box Test화면</p>

            <div style={{ padding: '20px' }} >
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
            </div>
        </div>
    );
}

export default TestBox;