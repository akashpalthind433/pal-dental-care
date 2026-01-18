import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
databaseURL: "https://YOUR_PROJECT.firebaseio.com",
projectId: "YOUR_PROJECT",
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


window.bookAppointment = function () {
push(ref(database, 'appointments'), {
name: name.value,
phone: phone.value,
date: date.value,
problem: problem.value
});
alert('Appointment booked successfully');
}
