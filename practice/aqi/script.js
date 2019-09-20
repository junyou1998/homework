const aqiUrl = 'https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json'
const lists = document.querySelector('.lists')
const search = document.querySelector('#search')
const timestamp = document.querySelector('.timestamp')
let aqiData = []
let find = 0

fetch(aqiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (wholeData) {
        aqiData = wholeData
        console.log(aqiData)
        timestamp.innerHTML = `最後更新時間:${wholeData[0].PublishTime}`
        aqiData.forEach(data => {

            let aqicolor = ""
            switch (data.Status) {
                case '良好':
                    aqicolor = "good";
                    break;
                case '普通':
                    aqicolor = 'notbad';
                    break;
                case '對敏感族群不健康':
                    aqicolor = 'bad-1';
                    break;
                case '對所有族群不健康':
                    aqicolor = 'bad-2';
                    break;
                case '非常不健康':
                    aqicolor = 'bad-3';
                    break;
                default:
                    aqicolor = "danger";
            }
            lists.innerHTML +=
                `
            <li class="list ${aqicolor}">
                <span class="location">${data.SiteName}</span>
                <span class="status">${data.Status}</span>
                <span class="aqi">AQI : ${data.AQI}</span>
            </li>
            `
            // console.log(data.AQI, data.Pollutant)
        })
    });



let area
let tempData


search.onkeyup = function () {

    area = search.value
    console.log(area)

    aqiData.forEach(data => {

        if (data.SiteName == area) {
            tempData = data
            console.log(tempData)
            find += 1

        }
        else {
            find += 0
        }
    })

    if (find != 0) {
        let aqicolor = ""
        switch (tempData.Status) {
            case '良好':
                aqicolor = "good";
                break;
            case '普通':
                aqicolor = 'notbad';
                break;
            case '對敏感族群不健康':
                aqicolor = 'bad-1';
                break;
            case '對所有族群不健康':
                aqicolor = 'bad-2';
                break;
            case '非常不健康':
                aqicolor = 'bad-3';
                break;
            default:
                aqicolor = "danger";
        }

        lists.innerHTML =
            `
            <li class="list ${aqicolor}">
                <span class="location">${tempData.SiteName}</span>
                <span class="status">${tempData.Status}</span>
                <span class="aqi">AQI : ${tempData.AQI}</span>
            </li>
            `
    }
    else{
        lists.innerHTML = ""
        aqiData.forEach(data => {
            let aqicolor = "ss"
            switch (data.Status) {
                case '良好':
                    aqicolor = "good";
                    break;
                case '普通':
                    aqicolor = 'notbad';
                    break;
                case '對敏感族群不健康':
                    aqicolor = 'bad-1';
                    break;
                case '對所有族群不健康':
                    aqicolor = 'bad-2';
                    break;
                case '非常不健康':
                    aqicolor = 'bad-3';
                    break;
                default:
                    aqicolor = "danger";
            }
            
            lists.innerHTML +=
                `
            <li class="list ${aqicolor}">
                <span class="location">${data.SiteName}</span>
                <span class="status">${data.Status}</span>
                <span class="aqi">AQI : ${data.AQI}</span>
            </li>
            `
        })
    }
    find = 0
}



$('#search').focus(
    function () {
        $(this).parent('div').addClass('searchFocus');
    }).blur(
        function () {
            $(this).parent('div').removeClass('searchFocus');
        });