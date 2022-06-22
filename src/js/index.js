"use strict";

import { config } from "./config.js";

const apiKey = config.API_KEY;
const btnSubmit = document.getElementById("button");
const lineCanvas = document.getElementById("lineCanvas");

btnSubmit.addEventListener("click", () => {
	const inputCity = document.getElementById("city").value;
	async function getCityWeather() {
		let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}&units=metric`);
		let data = await response.json();

		// City and country
		const cityDisplay = document.querySelector(".city");
		const countryDisplay = document.querySelector(".country");
		cityDisplay.textContent = data.city.name;
		countryDisplay.textContent = data.city.country;

		//DAY 1
		const dateData = data.list[0].dt;
		const dayData = new Date(dateData * 1000);
		const dayDisplay = dayData.toDateString();
		const dayOneNameDisplay = document.querySelector(".day-one-dayname");
		const dayOneTempDisplay = document.querySelector(".day-one-temp");
		const dayOneSkyDisplay = document.querySelector(".day-one-sky");
		dayOneNameDisplay.textContent = dayDisplay;
		dayOneTempDisplay.textContent = data.list[0].main.temp + " °C";
		dayOneSkyDisplay.textContent = data.list[0].weather[0].main;

		//DAY 2
		const dateDataTwo = data.list[8].dt;
		const dayDataTwo = new Date(dateDataTwo * 1000);
		const dayDisplayTwo = dayDataTwo.toDateString();
		const dayTwoNameDisplay = document.querySelector(".day-two-dayname");
		const dayTwoTempDisplay = document.querySelector(".day-two-temp");
		const dayTwoSkyDisplay = document.querySelector(".day-two-sky");
		dayTwoNameDisplay.textContent = dayDisplayTwo;
		dayTwoTempDisplay.textContent = data.list[8].main.temp + " °C";
		dayTwoSkyDisplay.textContent = data.list[8].weather[0].main;

		//DAY 3
		const dateDataThree = data.list[16].dt;
		const dayDataThree = new Date(dateDataThree * 1000);
		const dayDisplayThree = dayDataThree.toDateString();
		const dayThreeNameDisplay = document.querySelector(".day-three-dayname");
		const dayThreeTempDisplay = document.querySelector(".day-three-temp");
		const dayThreeSkyDisplay = document.querySelector(".day-three-sky");
		dayThreeNameDisplay.textContent = dayDisplayThree;
		dayThreeTempDisplay.textContent = data.list[16].main.temp + " °C";
		dayThreeSkyDisplay.textContent = data.list[16].weather[0].main;

		//DAY 4
		const dateDataFour = data.list[24].dt;
		const dayDataFour = new Date(dateDataFour * 1000);
		const dayDisplayFour = dayDataFour.toDateString();
		const dayFourNameDisplay = document.querySelector(".day-four-dayname");
		const dayFourTempDisplay = document.querySelector(".day-four-temp");
		const dayFourSkyDisplay = document.querySelector(".day-four-sky");
		dayFourNameDisplay.textContent = dayDisplayFour;
		dayFourTempDisplay.textContent = data.list[24].main.temp + " °C";
		dayFourSkyDisplay.textContent = data.list[24].weather[0].main;

		// DAY 5
		const dateDataFive = data.list[32].dt;
		const dayDataFive = new Date(dateDataFive * 1000);
		const dayDisplayFive = dayDataFive.toDateString();
		const dayFiveNameDisplay = document.querySelector(".day-five-dayname");
		const dayFiveTempDisplay = document.querySelector(".day-five-temp");
		const dayFiveSkyDisplay = document.querySelector(".day-five-sky");
		dayFiveNameDisplay.textContent = dayDisplayFive;
		dayFiveTempDisplay.textContent = data.list[32].main.temp + " °C";
		dayFiveSkyDisplay.textContent = data.list[32].weather[0].main;

		//CHART
		const lineChart = new Chart(lineCanvas, {
			type: "line",
			data: {
				labels: [dayDisplay, dayDisplayTwo, dayDisplayThree, dayDisplayFour, dayDisplayFive],
				datasets: [
					{
						label: "°C for next 5 days",
						data: [data.list[0].main.temp, data.list[8].main.temp, data.list[16].main.temp, data.list[24].main.temp, data.list[32].main.temp],
						fill: true,
						backgroundColor: "white",
						tension: 0.1,
						responsive: true,
					},
				],
			},
		});
	}
	getCityWeather();
});
