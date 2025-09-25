import Navigation from "../components/shared/Navigation";

function Dashboard() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navigation />

      <main className='max-w-7xl mx-auto p-6'>
        <h2 className='text-xl font-semibold mb-4'>Welcome to DocketBook</h2>
        <div className='bg-white p-6 rounded-lg shadow'>
          <p>Dashboard content coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
