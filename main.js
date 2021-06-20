let map = L.map("mapid").setView([35.28156935117582, 139.67171003344106],10)

L.tileLayer("https://cdn.lima-labs.com/{z}/{x}/{y}.png?free", {
    attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
})