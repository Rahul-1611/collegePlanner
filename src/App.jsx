import GPA from './components/GPA';
import Courses from './components/Courses';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Student Dashboard</h1>
      </header>
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GPA />
          <Courses />
        </div>
      </main>
    </div>
  );
}

export default App;
