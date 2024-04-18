// Student data with subjects and marks (hard-coded)
var studentData = [
    { subject: 'Math', marks: 98 },
    { subject: 'English', marks: 90 },
    { subject: 'Science', marks: 80 },
    { subject: 'History', marks: 50 },
    { subject: 'Art', marks: 75 },
    { subject: 'Music', marks: 80 }
];

// Function to display student marks by subject in the table
function displayMarksBySubject() {
    var marksBody = document.getElementById('marksBody');

    studentData.forEach((data) => {
        var row = marksBody.insertRow();
        var subjectCell = row.insertCell(0);
        var marksCell = row.insertCell(1);

        subjectCell.textContent = data.subject;
        marksCell.textContent = data.marks;
    });
}

// Function to calculate total marks
function calculateTotalMarks() {
    var totalMarks = studentData.reduce((sum, data) => sum + data.marks, 0);
    return totalMarks;
}

// Function to calculate percentage
function calculatePercentage() {
    var totalMarks = calculateTotalMarks();
    var totalPossibleMarks = studentData.length * 100;
    var percentage = (totalMarks / totalPossibleMarks) * 100;

    var percentageResult = document.getElementById('percentageResult');
    percentageResult.textContent = 'Overall Percentage: ' + percentage.toFixed(2) + '%';
}

// Display student marks by subject when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayMarksBySubject();
});

// Add event listener to calculate percentage when button is clicked
var calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculatePercentage);
ee