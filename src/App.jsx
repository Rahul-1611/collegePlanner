import { Grid } from '@mui/material';
import GPATracker from './components/GPATracker';
import CurrentCourses from './components/CurrentCourses';
import CreditsNeeded from './components/CreditsNeeded';
import EstimatedGraduation from './components/EstimatedGraduation';
import CoursePrereqs from './components/CoursePrereqs';
import ProspectiveCourses from './components/ProspectiveCourses';
import GraduationRequirements from './components/GraduationRequirements';
import AvailableCourses from './components/AvailableCourses';
import GPACalculator from './components/GPACalculator';

function App() {
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <GPATracker />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CurrentCourses />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CreditsNeeded />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EstimatedGraduation />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CoursePrereqs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProspectiveCourses />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <GraduationRequirements />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AvailableCourses />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <GPACalculator />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
