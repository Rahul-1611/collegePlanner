import { Card, CardContent, Typography } from '@mui/material';

const EstimatedGraduation = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Estimated Graduation Term
        </Typography>
        <Typography variant="h3" component="div" className="text-center">
          Spring 2026
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EstimatedGraduation;
