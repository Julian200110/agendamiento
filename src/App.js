import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Services/Services.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Calendar from './Components/Calendar/Calendar.js';
import CalendarAllServices from './Components/Calendar/CalendarAllServices.js';
import PatientAppointment from './Components/Patient/PatientAppointments';
import DailyAppointments from './Components/Calendar/DailyAppointments';
export const serviceContext = React.createContext();

function App() {
	const [service, setService] = useState([]);
	const [serviceData, setServiceData] = useState([]);

	return (
		<div className='App'>
			<serviceContext.Provider value={service}>
				<Routes>
					<Route
						path='/agendamiento'
						element={
							<Services
								setServiceData={setServiceData}
								setService={setService}
							/>
						}
					/>
					<Route
						path='/calendar/:id'
						element={<Calendar serviceData={serviceData} />}
					/>
					<Route
						path='/calendarAllServices'
						element={<CalendarAllServices />}
					/>
					<Route path='/PatientAppointment' element={<PatientAppointment />} />
					<Route path='/dailyAppointments' element={<DailyAppointments />} />
				</Routes>
			</serviceContext.Provider>
		</div>
	);
}

export default App;
