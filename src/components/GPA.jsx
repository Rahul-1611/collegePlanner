import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const GPA = () => {
  const [gpa, setGpa] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from a backend
    setTimeout(() => {
      // Replace with actual API call
      fetchGpaFromBackend().then((backendGpa) => {
        setGpa(backendGpa);
        setLoading(false);
      });
    }, 1000);
  }, []);

  // Simulate a backend API call
  const fetchGpaFromBackend = () => {
    return new Promise((resolve) => {
      // Simulate a network delay
      setTimeout(() => {
        // Mock a backend response
        const backendGpa = 3.8;
        resolve(backendGpa);
      }, 500);
    });
  };

  const getGpaColor = () => {
    if (gpa >= 3.5) {
      return 'text-green-500';
    } else if (gpa >= 3.0) {
      return 'text-yellow-500';
    } else {
      return 'text-red-500';
    }
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center p-4">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Card className="max-w-sm mx-auto mt-10 shadow-lg rounded-lg">
      <CardContent className="text-center">
        <Typography variant="h5" component="div" className="mb-2">
          Current GPA
        </Typography>
        <Typography variant="h2" component="p" className={`${getGpaColor()}`}>
          {gpa}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GPA;
