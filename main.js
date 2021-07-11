let map = L.map("mapid").setView([35.25156935117582, 139.67171003344106], 13)

L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院ウェブサイト</a>'
}).addTo(map);

if ('geolocation' in navigator) {
    let watchId = navigator.geolocation.watchPosition(watch_position);

    function watch_position(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        console.log(latitude, longitude);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup("現在位置")
            .openPopup();
    }

} else {
    alert("現在位置は取得できませんでした");
}

// 公園の種類（type）
// 街区neighbor 近隣block 地区district 風致scenic 歴史history 動植物nature 総合general 運動sports その他other
// トイレ（toilet）
// 無し0 有り1 多目的トイレ有2
// サッカー・野球
// 不可0 難1 可2
// 治安
// 良い2 普通1 悪い0

const parks = [
    {
        name: "桜が丘１丁目公園", type: "neighbor", wide: 4669, water: 1, toilet: 0, soccer: 2, baseball: 0, pet: 1, bench: 4, playset: { total: 8, bar: 3, obstacle_courses: 1, swing: 4 }, security: 2, latitude: 35.2548252, longitude: 139.7000603, picture: null,
        comment: "広々とした賑やかな公園です。小さな崖の上には桜の木がたくさん生えています。高い柵が公園を取り囲んでおり、サッカーをしてもボールが外に飛んでいくことはほとんどないです（階段に落ちた場合を除く）。ちなみに、バット使用禁止なのでキャッチボールしかできません。また、小さな子も遊びに来るので、激しい運動や危険な遊びは控えましょう。"
    },
    {
        name: "吉井４丁目公園", type: "neighbor", wide: 1998, water: 1, toilet: 0, soccer: 0, baseball: 0, pet: 1, bench: 2, playset: { total: 3, obstacle_courses: 1, swing: 2 }, security: 2, latitude: 35.25264034, longitude: 139.7016554, picture: null,
        comment: "見通しが良く、賑やかな公園です。柵がとても低いので、サッカーや野球などはできません。小さな子や、小学生などが多く遊びに来ているので、安全には十分に注意してください。様々な種類の植物が生えており、季節ごとに景観が大きく変わります。傍の車道の交通量がとても多いので、訪れる際は車によく注意してください。"
    },
    {
        name: "吉井４丁目公園", type: "neighbor", wide: 1998, water: 1, toilet: 0, soccer: 0, baseball: 0, pet: 1, bench: 2, playset: { total: 3, obstacle_courses: 1, swing: 2 }, security: 2, latitude: 35.25264034, longitude: 139.7016554, picture: null,
        comment: "見通しが良く、賑やかな公園です。柵がとても低いので、サッカーや野球などはできません。小さな子や、小学生などが多く遊びに来ているので、安全には十分に注意してください。様々な種類の植物が生えており、季節ごとに景観が大きく変わります。傍の車道の交通量がとても多いので、訪れる際は車によく注意してください。"
    },
]
