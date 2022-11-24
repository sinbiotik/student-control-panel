const container = document.querySelector('.container');
// Создаем заголовок формы / Creating a form title
const header = document.createElement('h1');
header.classList.add('header', 'text-center');
header.textContent = 'Панель управления студентами';
container.append(header);

const titleForm = document.createElement('h4');
titleForm.classList.add('title');
titleForm.textContent = 'Форма для добавления в базу денных нового студента:';
container.append(titleForm);

// Создаем форму добавления нового студента /Creating a form for adding a new student
function createForm() {
    const form = document.createElement('form');    
    const inputSurname = document.createElement('input');
    const inputName = document.createElement('input');
    const inputMiddleName = document.createElement('input');    
    const inputDateOfBirth = document.createElement('input');
    // const labelDateOfBirth = document.creatrElement('label');
    const inputYearOfStartStudy = document.createElement('input');    
    const inputFaculty = document.createElement('input');    
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');

    form.classList.add('mb-3', 'mt-3');      
    inputSurname.classList.add('form-control', 'mt-2', 'mb-2');
    inputSurname.setAttribute("type", "text");
    inputSurname.placeholder = 'Фамилия';
    inputName.classList.add('form-control', 'mt-2', 'mb-2');
    inputName.setAttribute("type", "text");
    inputName.placeholder = 'Имя';  
    inputMiddleName.classList.add('form-control', 'mt-2', 'mb-2');
    inputMiddleName.setAttribute("type", "text");
    inputMiddleName.placeholder = 'Отчество';    
    inputDateOfBirth.classList.add('form-control', 'mt-2', 'mb-2', 'DateOfBirth');
    inputDateOfBirth.setAttribute("type", "date");    
    // inputDateOfBirth.placeholder = 'Дата рождения';           // добавить label
    // labelDateOfBirth.setAttribute('for', 'DateOfBirth');
    inputYearOfStartStudy.classList.add('form-control', 'mt-2', 'mb-2');
    inputYearOfStartStudy.setAttribute("type", "number");
    inputYearOfStartStudy.placeholder = 'Год начала обучения';   
    inputFaculty.classList.add('form-control', 'mt-2', 'mb-2');
    inputFaculty.setAttribute("type", "text");
    inputFaculty.placeholder = 'Факультет';
    buttonWrapper.classList.add('input-group-append')
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить студента';    
    
    container.append(form);        
    form.append(inputSurname);
    form.append(inputName);
    form.append(inputMiddleName);    
    // form.append(labelDateOfBirth);
    form.append(inputDateOfBirth);
    form.append(inputYearOfStartStudy);
    form.append(inputFaculty);
    buttonWrapper.append(button);
    form.append(buttonWrapper);
    
    return {
        form,
        inputSurname,
        inputName,
        inputMiddleName,
        inputDateOfBirth,
        inputYearOfStartStudy,
        inputFaculty,
        button,
    }
}
let createF = createForm();
container.append(createF.form);

// Создаем заголовок таблицы / Creating a table title
const titleTable = document.createElement('h4');
titleTable.classList.add('title', 'text-center');
titleTable.textContent = 'Список студентов';
container.append(titleTable);

// Создаем таблицу / Create a table
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.append(thead);
table.append(tbody);
container.append(table);

// Создаем нулевую строку таблицы /Create a null row of the table

function createANullRow() {
    let rowSearch = document.createElement('tr');
    rowSearch.classList.add('searchFullName-tr');
    let searchFullName = document.createElement('td');
    let inputSearchFullName = document.createElement('input');
    inputSearchFullName.classList.add('form-control');
    let searchFaculty = document.createElement('td');
    let inputSearchFaculty = document.createElement('input');
    inputSearchFaculty.classList.add('form-control');
    let searchDateOfBirthAndAge = document.createElement('td');
    let inputSearchDateOfBirthAndAge = document.createElement('input');  
    inputSearchDateOfBirthAndAge.classList.add('form-control');
    let searchYearsOfStudyAndCourseNumber = document.createElement('td');
    let inputSearchYearsOfStudyAndCourseNumber = document.createElement('input');
    inputSearchYearsOfStudyAndCourseNumber.classList.add('form-control');
    searchFullName.append(inputSearchFullName);
    rowSearch.append(searchFullName);
    searchFaculty.append(inputSearchFaculty);
    rowSearch.append(searchFaculty);
    searchDateOfBirthAndAge.append(inputSearchDateOfBirthAndAge);
    rowSearch.append(searchDateOfBirthAndAge);
    searchYearsOfStudyAndCourseNumber.append(inputSearchYearsOfStudyAndCourseNumber);
    rowSearch.append(searchYearsOfStudyAndCourseNumber);
    
    return {
        rowSearch,
        inputSearchFullName,
        inputSearchFaculty,
        inputSearchDateOfBirthAndAge,
        inputSearchYearsOfStudyAndCourseNumber,
    }
}

let createANullR = createANullRow();
thead.append(createANullR.rowSearch);

// Создаем первую строку таблицы /Create the first row of the table
function createAFirstRow() {
    let rowHeading = document.createElement('tr');
    let headingFullName = document.createElement('th');
    headingFullName.textContent = "ФИО студента";
    let headingFaculty = document.createElement('th');
    headingFaculty.textContent = "Факультет";
    let headingDateOfBirthAndAge = document.createElement('th');
    headingDateOfBirthAndAge.textContent = "Дата рождения и возраст";  
    let headingYearsOfStudyAndCourseNumber = document.createElement('th');
    headingYearsOfStudyAndCourseNumber.textContent = "Годы обучения и номер курса";
    rowHeading.append(headingFullName);
    rowHeading.append(headingFaculty);
    rowHeading.append(headingDateOfBirthAndAge);
    rowHeading.append(headingYearsOfStudyAndCourseNumber);

    return {
        rowHeading,
        headingFullName,
        headingFaculty,
        headingDateOfBirthAndAge,
        headingYearsOfStudyAndCourseNumber,
    }
}

let createAFirstR = createAFirstRow();
thead.append(createAFirstR.rowHeading);

// Создаем массив со студентами по нажатию кнопки

let studentListArray;

// Проверяем наличие студентов в localStorage /Checking if there are students in localStorage
if (localStorage.length > 0) {    
    studentListArray = JSON.parse(localStorage.getItem('myKey'));
    renderTable();
} else {
    studentListArray = [];
}

createF.form.addEventListener('submit', function(e) {
    e.preventDefault();    
    let surname = createF.inputSurname.value.trim(); // если совпадает с названием ключа в объекте, можно не указывать как 'значение'
    let name = createF.inputName.value.trim();
    let middleName = createF.inputMiddleName.value.trim();
    let dateOfBirth = createF.inputDateOfBirth.valueAsDate;    
    let yearOfStartStudy = Number(createF.inputYearOfStartStudy.value)
    let faculty = createF.inputFaculty.value.trim();

    // Указываем условия валидации /Creating validation conditions
    if (createF.inputSurname.value === '' || createF.inputName.value === '' || createF.inputMiddleName.value === '' || createF.inputDateOfBirth.value === '' || createF.inputYearOfStartStudy.value === '' || createF.inputFaculty.value === '') {
        alert('Все поля должны быть заполнены');
        return;
    }
    if (new Date(dateOfBirth).getFullYear() < 1900 || new Date(dateOfBirth).getFullYear() >= new Date().getFullYear()) {        
        alert('Дата рождения должна находиться в диапазоне от 01.01.1900 до текущей даты');
        return;
    }
    if (yearOfStartStudy < 2000 || yearOfStartStudy > new Date().getFullYear() || (yearOfStartStudy === new Date().getFullYear() && new Date().getMonth() < 8)) {
        alert('Год начала обучения должен находиться в диапазоне от 2000-го до текущего года');
        return;
    }

    // Массив со студентами 
    studentListArray.push(
        {surname, name: name, middleName: middleName, dateOfBirth: dateOfBirth, yearOfStartStudy: yearOfStartStudy, faculty: faculty},              
    );
    // console.log(studentListArray);
    studentListArray = JSON.stringify(studentListArray);
    // console.log(studentListArray);
    localStorage.setItem('myKey', studentListArray);   
    studentListArray = JSON.parse(localStorage.getItem('myKey')); 
    renderTable();   
    createF.inputSurname.value = createF.inputName.value = createF.inputMiddleName.value = createF.inputDateOfBirth.value = createF.inputYearOfStartStudy.value = createF.inputFaculty.value = '';
       
});

function renderTable() {
    // Рассчитываем возраст студентов /Calculate the age of students
    tbody.replaceChildren();    
    let searchStudentsListArray = studentListArray;                    // searchStudentsListArray - создаем массив для работы с фильтрами поиска. При добавлении новых студентов массив просто переименовывается
    if (createANullR.inputSearchFullName.value !== '') {
        searchStudentsListArray = searchStudentsListArray.filter(
         student => (student.surname === createANullR.inputSearchFullName.value)
         || (student.name === createANullR.inputSearchFullName.value)
         || (student.middleName === createANullR.inputSearchFullName.value)
        );        
    }   

    if (createANullR.inputSearchFaculty.value !== '') {
        searchStudentsListArray = searchStudentsListArray.filter(student => student.faculty === createANullR.inputSearchFaculty.value);
    }

    if (createANullR.inputSearchDateOfBirthAndAge.value !== '') {
        searchStudentsListArray = searchStudentsListArray.filter(student => new Date(student.dateOfBirth).getFullYear() === Number(createANullR.inputSearchDateOfBirthAndAge.value));
    }
    
    if (createANullR.inputSearchYearsOfStudyAndCourseNumber.value !== '') {
        searchStudentsListArray = searchStudentsListArray.filter(student => student.yearOfStartStudy === Number(createANullR.inputSearchYearsOfStudyAndCourseNumber.value));
    }    

    let now = new Date();
    let nowM = now.getMonth();
    let nowY = now.getFullYear();    
    for(let student of searchStudentsListArray) {
        let studentDateOfBirth = new Date(Date.parse(student.dateOfBirth));                   
        let birthY = studentDateOfBirth.getFullYear();           
        let FullYear = nowY - birthY;    

        // Рассчитываем период обучения и курс /Calculate the period of study and course
        let yearStart = student.yearOfStartStudy;    
        let yearsPassedBeganStudy = nowY - yearStart;
        let courseNumber;
        if (yearsPassedBeganStudy < 4) {      
            courseNumber = `${yearStart} - ${yearStart + 4} (${yearsPassedBeganStudy + 1} курс)`;    
        } else if (yearsPassedBeganStudy === 4 && nowM < 8) {
            courseNumber = `${yearStart} - ${yearStart + 4} (${yearsPassedBeganStudy} курс)`;
        } else {
            courseNumber = `${yearStart} - ${yearStart + 4} (закончил)`;
        }      

        // Создаем таблицу со списком студентов из массива /Create a table with a list of students from an array
        let row_2 = document.createElement('tr');
        let row_2_FullName = document.createElement('td');
        row_2_FullName.textContent = `${student.surname} ${student.name} ${student.middleName}`
        // Или можно так:
        // row_2_FullName.textContent = student.surname + ' ' + student.name + ' ' + student.middleName;       
        let row_2_Faculty = document.createElement('td');
        row_2_Faculty.textContent = student.faculty;
        let row_2_DateOfBirthAndAge = document.createElement('td');    
        // row_2_DateOfBirthAndAge.textContent = studentDateOfBirth.toLocaleDateString('ru-RU', {year: 'numeric', month: 'numeric', day: 'numeric'}) + ' \(' + FullYear + ' лет\)';
        // Или можно так:
        row_2_DateOfBirthAndAge.textContent = `${studentDateOfBirth.toLocaleDateString('ru-RU', {year: 'numeric', month: 'numeric', day: 'numeric'})} (${FullYear} лет)`;
        let row_2_YearsOfStudyAndCourseNumber = document.createElement('td');
        row_2_YearsOfStudyAndCourseNumber.textContent = courseNumber;    
        row_2.append(row_2_FullName);
        row_2.append(row_2_Faculty);
        row_2.append(row_2_DateOfBirthAndAge);
        row_2.append(row_2_YearsOfStudyAndCourseNumber);
        tbody.append(row_2);
    }   
}

// Создаем код для работы фильтров поиска /Creating the Code for Search Filters to Work
createANullR.rowSearch.addEventListener('input', () => { 
    renderTable();
});

// Создаем код для сортировки списка студентов по алфавиту и дате /Creating code to sort the list of students alphabetically and by date
createAFirstR.headingFullName.addEventListener('click', () => {    
    studentListArray = studentListArray.sort(function (a, b) {
        let x = a.surname.toLowerCase();
        let y = b.surname.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}    
        return 0;
    });        
    renderTable();
});

createAFirstR.headingFaculty.addEventListener('click', () => {    
    studentListArray = studentListArray.sort(function (a, b) {
        let x = a.faculty.toLowerCase();
        let y = b.faculty.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}    
        return 0;
    });       
    renderTable();
});

createAFirstR.headingDateOfBirthAndAge.addEventListener('click', () => {    
    studentListArray = studentListArray.sort(function (a, b) {return new Date(a.dateOfBirth).getFullYear() - new Date(b.dateOfBirth).getFullYear()});
    renderTable();   
});


createAFirstR.headingYearsOfStudyAndCourseNumber.addEventListener('click', () => {    
    studentListArray = studentListArray.sort(function (a, b) {return a.yearOfStartStudy - b.yearOfStartStudy});       
    renderTable();
});

// console.log(studentListArray);

// localStorage.clear()






















