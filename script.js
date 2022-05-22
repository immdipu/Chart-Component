const chartContainer = document.querySelector('.barcontainer');
const bar = document.querySelectorAll('.bar');
const title = document.querySelectorAll('.title')

var maxIndex = 0;
fetch("./data.json")
    .then((response) => response.json())
    .then((elements) => {



        //TO FIND MAXIMUM HEIGHT//
        elements.forEach(function (ite, i) {
            if (ite.amount > elements[maxIndex].amount) {
                maxIndex = i;

            }
        })



        elements.forEach(function (items, index) {
            const chartAmount = items.amount;
            const chartDay = items.day;



            function html() {
                if (index == maxIndex) {
                    chartContainer.insertAdjacentHTML("beforeend", `<div class="bar_box">
<div class="column">
<span class="title">${chartAmount}</span>
<span class="bar" style="height:${chartAmount * 3}px; background-color: rgb(68 172 203 / 48%);;"></span>
</div>
<span class="day">${chartDay}</span>
</div>`)
                }
                else {
                    chartContainer.insertAdjacentHTML("beforeend", `<div class="bar_box">
                    <div class="column">
                    <span class="title">${chartAmount}</span>
                    <span class="bar" style="height:${chartAmount * 3}px;background-color: hsl(10, 79%, 65%);"></span>
                    </div>
                    <span class="day">${chartDay}</span>
                    </div>`)
                }


            }

            html();

        })

    })



