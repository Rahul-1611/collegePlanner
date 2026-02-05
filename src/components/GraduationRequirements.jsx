import { Card, CardContent, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';

const requirements = [
  { name: 'Complete 120 credits', completed: true },
  { name: 'Complete all major requirements', completed: true },
  { name: 'Achieve a minimum GPA of 2.0', completed: true },
  { name: 'Complete senior project', completed: false },
];

const GraduationRequirements = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Graduation Requirements
        </Typography>
        <List>
          {requirements.map((req) => (
            <ListItem key={req.name} className="bg-gray-700 rounded-lg mb-2">
              <Checkbox checked={req.completed} disabled style={{ color: req.completed ? '#4caf50' : '' }} />
              <ListItemText primary={req.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default GraduationRequirements;
