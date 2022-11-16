
const input = document.querySelector('input')
// document.body.append(input)


// input.oninput = (Build) => {
//     year=input.value
// }

// let constructor= function Build(){
const year = (new Date()).getFullYear();
input.onchange = () => buildCalendar(Math.abs(input.value));
function buildCalendar(year) {
    for (let month = 1; month <= 12; month++) {
        const container = document.body.querySelector('.calendar');
        const monthDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        monthDiv.append(h3);
        const ul = document.createElement('ul');
        ul.insertAdjacentHTML(
            'afterbegin',
            '<li>пн</li><li>вт</li><li>ср</li><li>чт</li><li>пт</li><li>сб</li><li>вс</li>'
        );
        const firstDay = new Date(year, month - 1, 1);
        h3.textContent = firstDay.toLocaleString('default', { month: 'long' });
        for (let day = 1; day < firstDay.getDay(); day++) {
            const li = document.createElement('li');
            ul.append(li);


        }
        const daysCount = new Date(year, month, 0);
        for (let day = 1; day <= daysCount.getDate(); day++) {
            const li = document.createElement('li');
            li.textContent = day;
            ul.append(li);
            let a = new Date(2022, 02, 10)
            if (month == a.getMonth() && day == a.getDate()) {

                li.className = 'date-now';
            }
            let dayNow = new Date();
            if (month == dayNow.getMonth() && day == dayNow.getDate()) {
                li.className = 'date-now';
            }



        }

        monthDiv.append(ul);
        container.append(monthDiv)
    }
}


buildCalendar(input.value) 