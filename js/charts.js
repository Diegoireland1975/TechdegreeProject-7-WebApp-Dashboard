// Line chart
const trafficCanvas = document.getElementById("traffic-chart");

let trafficData1 = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
};

let trafficData2 = {
  labels: [
    "1-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [130, 158, 240, 480, 390, 470, 430, 320, 400, 400, 600],
      backgroundColor: "rgb(20,20,110, .5)",
      borderWidth: 1,
      borderColor: "rgb(255,165,0, .1)",
    },
  ],
};

let trafficData3 = {
  labels: [
    "1-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [700, 750, 700, 1200, 1300, 1750, 950, 1350, 950, 1500, 1300],
      backgroundColor: "rgb(20,20,110, .5)",
      borderWidth: 1,
      borderColor: "rgb(255,165,0, .1)",
    },
  ],
};

let trafficData4 = {
  labels: [
    "1-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [3500, 4400, 2500, 5000, 4800, 6100, 3500, 5000, 4200, 6500, 5200],
      backgroundColor: "rgb(20,20,110, .5)",
      borderWidth: 1,
      borderColor: "rgb(255,165,0, .1)",
    },
  ],
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 2000,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData1,
  options: trafficOptions,
});

//Loading charts
let trafficTerm = document.getElementsByClassName("traffic-nav")[0];
trafficTerm.addEventListener("click", (e) => {
  let selectedTerm = e.target.innerHTML;
  if (selectedTerm === "Hourly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData1,
      options: trafficOptions,
    });
  } else if (selectedTerm === "Daily") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData2,
      options: trafficOptions,
    });
  } else if (selectedTerm === "Weekly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData3,
      options: trafficOptions,
    });
  } else if (selectedTerm === "Monthly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: "line",
      data: trafficData4,
      options: trafficOptions,
    });
  }
});

// Bar chart

const dailyCanvas = document.getElementById("daily-chart");
// Create the data for the chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};
const dailyOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};
let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});
// Doughnut Chart

const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
};
const mobileOptions = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: "bold",
    },
  },
};
let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});
