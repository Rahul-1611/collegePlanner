import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

const CreditsNeeded = () => {
  const totalCredits = 120;
  const completedCredits = 80;
  const progress = (completedCredits / totalCredits) * 100;

  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Credits Needed to Graduate
        </Typography>
        <Typography variant="h3" component="div" className="text-center mb-4">
          {totalCredits - completedCredits}
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" className="text-right mt-2">
          {completedCredits} / {totalCredits} credits completed
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreditsNeeded;
