const ticketName = document.querySelector('#ticketName');
const ticketUrl = document.querySelector('#ticketUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketLevel = document.querySelector('#ticketLevel');
const ticketNote = document.querySelector('#ticketNote');
const addTiket = document.querySelector('#addTiket');
const ticketForm = document.querySelector('#ticket-form');
const regionSearch = document.querySelector('#regionSearch');
const ticketArea = document.querySelector('#ticketArea');
const totalData = document.querySelector('#totalData');
let data=[
    {
        "id":0,
        "name": "綠島自由行套裝行程",
        "imgUrl":"../assets/images/photo-1477894387642-00a731c511b3@2x.png",
        "area":"台北",
        "description":"嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
        "group":8,
        "price":1280,
        "rate":8.6
    },
    {
        "id":1,
        "name": "清境高空觀景步道二日遊",
        "imgUrl":"../assets/images/photo-1526772662000-3f88f10405ff@2x.png",
        "area":"台北",
        "description":"清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
        "group":12,
        "price":2580,
        "rate":8.2
    },
    {
        "id":2,
        "name": "南庄度假村露營車二日遊",
        "imgUrl":"../assets/images/photo-1598954467835-3b0b6fe3be70@2x.png",
        "area":"台中",
        "description":"南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
        "group":2,
        "price":1480,
        "rate":9.2
    },
    {
        "id":3,
        "name": "山林悠遊雙人套票",
        "imgUrl":"../assets/images/photo-1517760444937-f6397edcbbcd@2x.png",
        "area":"台中",
        "description":"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
        "group":"限時搶購",
        "price":880,
        "rate":9.3
    },
    {
        "id":4,
        "name": "漁樂碼頭釣魚體驗套票",
        "imgUrl":"../assets/images/photo-1490556505947-f833c3a09659@2x.png",
        "area":"台中",
        "description":"台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
        "group":5,
        "price":1280,
        "rate":8.2
    },
    {
        "id":5,
        "name": "熊森公園親子二日遊套票",
        "imgUrl":"../assets/images/photo-1535726858289-9ffe2dff6f52@2x.png",
        "area":"高雄",
        "description":"來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
        "group":3,
        "price":2480,
        "rate":8.6
    },
];


function renderData(location){
    const cacheData = data.filter(function(item){
        if (location === item.area){
            return item
        }

        if(!location){
            return item
        }
    })
    
    let str =``;
    cacheData.forEach(function(item){
       
        str += `<div class="col-lg-4">
        <ul class="list-unstyled m-0 h-100 d-flex flex-column shadowY-3">
        <li class="position-relative ">
            <div class="overflow-hidden">
            <a  href="#">
                <img class="img-fluid img-hover img-transition" src="${item.imgUrl}" alt="">
            </a>
            </div>
            <div style="top: -12px;" class="position-absolute py-2 px-15 fs-5 bg-secondary text-white rounded-end">${item.area}</div>
            <div class=" translate-middle-y position-absolute  bg-primary text-white  py-tag-5 px-2 ">${item.rate}</div>
        </li>
        <li class="px-15 py-3 bg-white flex-grow-1 ">
            <h2 class="fs-7 mb-15 border-2 border-bottom border-primary text-primary fw-bold linehight-4">${item.name}</h2>
            <p class="text-info m-0">${item.description}</p>
        </li>
        <li class="d-flex justify-content-between bg-white px-15 py-3 align-items-center">
            <p class="m-0 d-flex align-items-center text-primary">
            <span id="totalGroup" style="margin-right: 6px;" class="material-icons-outlined fs-5 ">error</span>
            ${item.group === '限時搶購' ?  '限時搶購' :  `剩下最後${item.group}組`}
            </p>
            <p class="text-primary m-0 fs-2  d-flex align-items-center fw-bold"><span class="fs-6 fw-normal">TWD</span>$${item.price}</p>
        </li>
        </ul>
    </div>`
    })
  
    totalData.textContent = `本次搜尋提供${cacheData.length}筆資料`
    ticketArea.innerHTML = str;
}

renderData();

addTiket.addEventListener('click',function(e){
    data.push(
        {
            "id":data.length,
            "name": ticketName.value,
            "imgUrl":ticketUrl.value,
            "area":ticketRegion.value,
            "description":ticketNote.value,
            "group":ticketNum.value,
            "price":ticketPrice.value,
            "rate":ticketLevel.value
        }
    )
    renderData();
    ticketForm.reset();
})

regionSearch.addEventListener('change',function(){
    renderData(regionSearch.value)
})