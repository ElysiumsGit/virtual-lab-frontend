import React from 'react'
import CardStatus from '../components/CardStatus/CardStatus'
import UserTable from '../components/Table/UserTable'

const Dashboard = () => {
  return (
     <main className="flex-1 bg-gray-100 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <CardStatus title='Total Students'/>
            <CardStatus title='Total Admin'/>
            <CardStatus title='Senior Highschool'/>
            <CardStatus title='Junior Highschool'/>
        </div>

        {/* Income/Expense Report */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Income/Expense Report</h2>
            {/* Placeholder for chart */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
            Chart Placeholder
            </div>
        </div>

        <UserTable/>
    </main>
  )
}

export default Dashboard