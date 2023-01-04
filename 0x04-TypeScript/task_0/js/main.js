var student1 = {
    firstName: "John",
    lastName: "doe",
    age: 20,
    location: "NewYork"
};
var student2 = {
    firstName: "Jane",
    lastName: "foreman",
    age: 19,
    location: "london"
};
var studentList;
studentList = [student1, student2];
var html1 = '<table><tr>';
var html2 = '</tr><tr>';
for (var i = 0; i < studentList.length; i++) {
    html1 += '<td>' + studentList[i].firstName + '</td>';
    html2 += "<td>" + studentList[i].location + "</td>";
}
var html = html1 + html2 + "</tr></table>";
console.log(html);
