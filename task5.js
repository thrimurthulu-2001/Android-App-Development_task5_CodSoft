// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const authContainer = document.getElementById('auth-container');
const courseContainer = document.getElementById('course-container');
const attendanceContainer = document.getElementById('attendance-container');
const courseList = document.getElementById('course-list');
const attendanceList = document.getElementById('attendance-list');
const authMessage = document.getElementById('auth-message');

document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('register-btn').addEventListener('click', register);
document.getElementById('logout-btn').addEventListener('click', logout);
document.getElementById('submit-attendance').addEventListener('click', submitAttendance);

auth.onAuthStateChanged(user => {
    if (user