//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];


var cLastNameResults = [];
for (const students of studentList) {
    if (students.lastName[0] === 'C') {
        cLastNameResults.push({
            firstName: students.firstName,
            lastName: students.lastName,
            scores: students.scores
        });
    }
}

function minScore(scores) {
    return Math.min(...scores);
}

function maxScore(scores) {
    return Math.max(...scores);
    
}

function average(scores) {
    return scores.reduce((nb1, nb2) => nb1 + nb2, 0) / scores.length;
}

function manage(cLastNameResults) {
    for(const students of cLastNameResults) {
        students['minScore'] = minScore(students.scores);
        students['maxScore'] = maxScore(students.scores);
        students['avgScore'] = average(students.scores);
        delete students['scores'];
    }
}

manage(cLastNameResults);
console.log(cLastNameResults);
