import { Box, Button, MenuItem, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Categories from '../../Data/Categories'
import './Home.css'

const Home = ({ name, setName, fetchQuestions }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false)
            fetchQuestions(category, difficulty);
            history('/quiz');
        }
    };

    return (
        <Box className='content'>
            <Box className='settings'>
                <span style={{ fontSize: 30 }}>Quiz Setting</span>

                <Box className="settings-select">
                    {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                    <Stack direction='row' spacing={2}>
                        <TextField fullWidth style={{ marginBottom: 25 }} label="Enter Your Name" variant='outlined'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField fullWidth style={{ marginBottom: 25 }} select label="Select Category" variant='outlined'
                            onChange={(e) => setCategory(e.target.value)} value={category} >
                            {
                                Categories.map((cat) => (
                                    <MenuItem key={cat.category} value={cat.value}>
                                        {cat.category}
                                    </MenuItem>
                                ))
                            }

                        </TextField>
                    </Stack>
                    <TextField style={{ marginBottom: 25 }} select label="Select Difficulty" variant='outlined'
                        onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                        <MenuItem key='Easy' value='easy'>Easy</MenuItem>
                        <MenuItem key='Medium' value='medium'>Medium</MenuItem>
                        <MenuItem key='Hard' value='hard'>Hard</MenuItem>

                    </TextField>
                    <Button variant='contained' color='primary' size='large'
                        onClick={handleSubmit}>
                        Start Quiz
                    </Button>
                </Box>
            </Box>
            
        </Box>
    )
}

export default Home