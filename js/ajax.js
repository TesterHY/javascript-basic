// 東京都の天気予報データ取得するURL
const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

const button = document.getElementById("ajax-btn");
button.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      console.log("東京の明日の天気：" + weather);
    });
});
