const columnNames = ['Манга', 'Автор(ы)','Издатель','Аудитория','Количество томов','Публикация',"Примерные продажи (млн)"]
const mangaNames = ['One Piece. Большой куш','Golgo 13','Жемчуг дракона','Наруто','Детектив Конан','Black Jack','Slam Dunk','Kochira Katsushika-ku Kameari Kōen-mae Hashutsujo','Demon Slayer: Kimetsu no Yaiba','Pokémon Adventures','Дораэмон','Oishinbo','Блич','JoJo’s Bizarre Adventure','Атака на титанов','Astro Boy','Кулак Полярной звезды','The Kindaichi Case Files','Touch','Hajime no Ippo','Vagabond','Боец Баки','Captain Tsubasa','Sangokushi','Hunter × Hunter','Kinnikuman','Fairy Tail','Rurouni Kenshin','Стальной алхимик','Kingdom','Hana Yori Dango','Rokudenashi Blues','Aoki Densetsu Shoot!','The Prince of Tennis','Gintama','Bad Boys','H2','Major','Minami no Teiō','Ранма ½','Магическая битва','Моя геройская академия','City Hunter','Cobra','Devilman','Dragon Quest: Dai no Daibōken','Glass Mask','Initial D','Inuyasha','Токийский гуль']
const author = ['Эйитиро Ода','Такао Сайто','Акира Торияма','Масаси Кисимото','Госё Аояма','Осаму Тэдзука','Такэхико Иноуэ','Осаму Акимото','Коёхару Готогэ','Хидэнори Кусака','Фудзико Фудзио','Тэцу Кария','Тайто Кубо','Хирохико Араки','Хадзимэ Исаяма','Осаму Тэдзука','Буронсон','Ёдзабуро Канари','Мицуру Адати','Джордж Морикава','Такэхико Иноуэ','Кэйсукэ Итагаки','Ёити Такахаси','Мицутэру Ёкояма','Ёсихиро Тогаси','Yudetamago','Хиро Масима','Нобухиро Вацуки','Хирому Аракава','Ясухиса Хара','Ёко Камио','Масанори Морита','Цукаса Осима','Такэси Кономи','Хидэаки Сорати','Хироси Танака','Мицуру Адати','Такуя Мицуда','Дай Тэнноджи','Румико Такахаси','Гэгэ Акутами','Кохэй Хорикоси','Цукаса Ходзё','Буити Тэрасава','Го Нагай','Рику Сандзё','Судзуэ Миути','Сюити Сигэно','Румико Такахаси','Суи Исида']
const publisher = ['Shueisha','Shogakukan','Shueisha','Shueisha','Shogakukan','Akita Shoten','Shueisha','Shueisha','Shueisha','Shogakukan','Shogakukan','Shogakukan','Shueisha','Shueisha','Kodansha','Kobunsha','Shueisha','Kodansha','Shogakukan','Kodansha','Kodansha','Akita Shoten','Shueisha','Ushio Shuppansha','Shueisha','Shueisha','Kodansha','Shueisha','Square Enix','Shueisha','Shueisha','Shueisha','Kodansha','Shueisha','Shueisha','Shōnen Gahōsha','Shogakukan','Shogakukan','Nihon Bungeisha','Shogakukan','Shueisha','Shueisha','Shueisha','Shueisha','Kodansha','Shueisha','Hakusensha','Kodansha','Shogakukan','Shueisha']
const audith = ['Сёнэн','Сэйнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Кодомо','Сэйнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сэйнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сэйнэн','Сёдзё','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёнэн','Сёдзё','Сэйнэн','Сэйнэн','Сэйнэн']
const ch_count = [102,201,42,72,101,25,31,200,23,52,45,111,74,131,32,23,27,86,26,127,37,158,92,60,36,65,63,28,27,58,37,42,33,33,77,22,34,78,152,38,16,30,35,18,5,37,49,48,56,30]
const publish_time = ['1997 - настоящее время','1968 – настоящее время','1984–1995','1999–2014','1994 – настоящее время','1973–1983','1990–1996','1976–2016','2016–2020','1997 - настоящее время','1969–1996','1983–2014','2001–2016','1987 – настоящее время','2009–2021','1952–1968','1983–1988','1992 – настоящее время','1981–1986','1989 – настоящее время','1998–2015','1991 – настоящее время','1981 - настоящее время','1971–1986','1998 – настоящее время','1979 - настоящее время','2006–2017','1994–1999','2001–2010','2006 - настоящее время','1992–2003','1988–1997','1990–2003','1999–2008','2003–2019','1988–1996','1992–1999','1994–2010','1992 - настоящее время','1987–1996','2018 - настоящее время','2014 - настоящее время','1985–1991','1978–1984','1972–1973','1989–1996','1976 - настоящее время','1995–2013','1996–2008','2011–2018']
const sales_num = [500,300,260,270,233,176,157,157,150,150,140,130,120,120,110,100,100,100,100,96,82,80,80,80,79,75,72,72,70.3,70,61,60,60,60,55,5,55,55,53,53,53,50,50,50,50,50,50,50,50,50]




let manga = {
    MangaName: Array.from(mangaNames),
    Author: Array.from(author),
    Publisher: Array.from(publisher),
    Audith: Array.from(audith),
    Ch_count: Array.from(ch_count),
    Publish_time: Array.from(publish_time),
    Sales_num: Array.from(sales_num),

    getAllKey: function () {
        let arrKey = [];
        for(let key in this) {
            if (typeof(this[key]) !== 'function') {
                arrKey.push(key)
            }
        }
        return arrKey;
    },

    print: function() {
        let html = '<table><tr>';
        let arrKey = this.getAllKey();
        for(let key in columnNames) {
            html += `<th>${ columnNames[key] }</th>`;
        }
        html += '</tr>';
        for(let i = 0; i < this[arrKey[0]].length; i++) {
            html += '<tr>';
            for(let key in arrKey) {
                html += `<td>${ this[arrKey[key]][i] }</td>`;
            }
            html += '</tr>';
        }
        return html + '</table>';
    }
};

let updatedManga = {
    __proto__: manga,

    change: function(k, p) {
        let allKey = this.getAllKey();
        for(let key in allKey) {
            let w = this[allKey[key]][k];
            this[allKey[key]][k] = this[allKey[key]][p];
            this[allKey[key]][p] = w;
        }
    },

    doCompare: function(elem1, elem2, sortOrder){
        switch (sortOrder)
        {
            case 'asc':
                if (elem1 > elem2) return true;
                else return false;
                break;
            case 'desc':
                if (elem1 < elem2) return true;
                else return false;
                break;
        }
    },

    isCompareOrder: function(n, arrCompare) {
        for(let k = 0; k < arrCompare.length; k += 2) {
            let sortOrder = (arrCompare[k+1] === true)? 'desc' : 'asc';
            if (this.doCompare(this[arrCompare[k]][n], this[arrCompare[k]][n + 1], sortOrder)) {
                return true;
            } else if (this[arrCompare[k]][n] === this[arrCompare[k]][n + 1]) {
                continue;
            } else {
                return false;
            }
        }
        return false
    },

    sorted: function(arr) {
        let n = this[arr[0]].length;
        for(let i = 0; i < n - 1; i += 1) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.isCompareOrder(j, arr)) {
                    this.change(j, j + 1);
                }
            }
        }
        return true;
    },

    getResultLogOpr: function(valueLeft, opr, valueRight) {
        if (opr == '==') {
            return valueLeft.indexOf(valueRight) !== -1;
        }
        if (opr == '!=') {
            return valueLeft != valueRight;
        }
        if (opr == '>') {
            return valueLeft > valueRight;
        }
        if (opr == '<') {
            return valueLeft < valueRight;
        }
        if (opr == '>=') {
            return valueLeft >= valueRight;
        }
        if (opr == '<=') {
            return valueLeft <= valueRight;
        }
    },

    filtered: function(arr) {
        if (arr.length == 0) return;
        let indexTrue = [];
        for (let i in this[arr[0]["key"]])
            indexTrue.push(parseInt(i));
        for (let i in arr) {
            let arrTrue = [];
            for (let j = 0; j < this[arr[i]["key"]].length; j++) {
                if (this.getResultLogOpr(this[arr[i]["key"]][j],arr[i]["operation"],arr[i]["value"])){
                    arrTrue.push(j);
                }
            }
            indexTrue = arrIntersection(indexTrue, arrTrue);
        }
        let curKeys = this.getAllKey();
        for (let k in curKeys) {
            let newValue = [];
            for (let i in indexTrue) {
                newValue.push(this[curKeys[k]][indexTrue[i]]);
            }
            this[curKeys[k]] = newValue;
        }
    },

    setToDefault: function() {
        this.MangaName = Array.from(mangaNames);
        this.Author = Array.from(author);
        this.Publisher = Array.from(publisher);
        this.Audith = Array.from(audith);
        this.Ch_count = Array.from(ch_count);
        this.Publish_time = Array.from(publish_time);
        this.Sales_num = Array.from(sales_num);
    }
};

function arrIntersection (arr1, arr2) {
    let result = [];
    for(let i in arr1)
    {
        if(arr2.includes(arr1[i])) result.push(arr1[i]);
    }
    return result;
}

let options = {
    No: 'Нет',
    MangaName: 'Название',
    Author: 'Автор',
    Audith: 'Аудитория'
}

let arrOptions = [];
for (let key in options) {
    let newOption = document.createElement('option');
    let optionText = document.createTextNode(options[key]);
    newOption.appendChild(optionText);
    newOption.setAttribute('value', key);
    arrOptions.push(newOption);
}

function drawTable() {
    document.getElementById('table').innerHTML = updatedManga.print();
    let svg = d3.select("svg")
        .attr("height", height)
        .attr("width", width);
    drawGraph(svg);
}

drawTable = () => document.getElementById('table').innerHTML = updatedManga.print();

function sortButton(){
    let arr = [];
    for (let i = 1; i < 3; i++) {
        if (document.getElementById(`selectLevel${i}`).value !== 'No') {
            arr.push(document.getElementById(`selectLevel${i}`).value);
            arr.push(document.getElementById(`sortOrder${i}`).checked);
        }
    }
    updatedManga.sorted(arr);
    drawTable();
}

function filterButton(){
    let arr = [];
    if (document.getElementById("NameFilter").value !== "") {
        let object = {
            key: "MangaName",
            operation: "==",
            value: document.getElementById("NameFilter").value
        }
        arr.push(object);
    }
    if (document.getElementById("AuthorFilter").value !== "") {
        let object = {
            key: "Author",
            operation: "==",
            value: document.getElementById("AuthorFilter").value
        }
        arr.push(object);
    }
    if (document.getElementById("PublisherFilter").value !== "") {
        let object = {
            key: "Publisher",
            operation: "==",
            value: document.getElementById("PublisherFilter").value
        }
        arr.push(object);
    }
    if (document.getElementById("AudithFilter").value !== "") {
        let object = {
            key: "Audith",
            operation: "==",
            value: document.getElementById("AudithFilter").value
        }
        arr.push(object);
    }

    updatedManga.filtered(arr);
    drawTable();
}

function resetButton(){
    updatedManga.setToDefault();
    drawTable();
}

function getActualOptions() {
    for (let count = 1; count <= 3; count++) {
        addOptionsToSelect(count);
    }
    for (let count = 1; count <= 3; count++) {
        removeOptions(count);
    }
}

function addOptionsToSelect(count){
    for (let i = 0; i < arrOptions.length; i++) {
        let flag = true;
        for (let j = 0; j < document.getElementById(`selectLevel${count}`).options.length; j++) {
            if (document.getElementById(`selectLevel${count}`).options[j].value === arrOptions[i].value) {
                flag = false;
                break;
            }
        }
        if (flag)
            document.getElementById(`selectLevel${count}`)
                .insertBefore(
                    arrOptions[i].cloneNode(true),
                    document.getElementById(`selectLevel${count}`).options[i]
                );
    }
}

function removeOptions(count){
    let index = 0;
    while (index < document.getElementById(`selectLevel${count}`).length) {
        for (let i = 1; i <= 3; i++) {
            if (i === count) continue;
            if (document.getElementById(`selectLevel${count}`).options[index].value === document.getElementById(`selectLevel${i}`).value
                && document.getElementById(`selectLevel${i}`).value !== "No") {
                document.getElementById(`selectLevel${count}`).options[index] = null;
                index = 0;
            }
        }
        index++;
    }
}