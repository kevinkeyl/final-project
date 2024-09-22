document.addEventListener("DOMContentLoaded", function() {
    loadLiveData();
    loadHistoricalData();
    loadAlerts();
});

function loadLiveData() {
    // 模擬實時數據
    const liveData = {
        heartRate: 75,
        steps: 1500,
        temperature: 36.5
    };

    const liveDataDiv = document.getElementById("live-data");
    liveDataDiv.innerHTML = `
        <p>心率: ${liveData.heartRate} bpm</p>
        <p>步數: ${liveData.steps}</p>
        <p>體溫: ${liveData.temperature} °C</p>
    `;
}

function loadHistoricalData() {
    fetch('data/historical-data.json')
        .then(response => response.json())
        .then(data => {
            const historicalDataDiv = document.getElementById("historical-data");
            historicalDataDiv.innerHTML = data.map(record => `
                <p>${record.date}: 心率 ${record.heartRate} bpm, 步數 ${record.steps}, 體溫 ${record.temperature} °C</p>
            `).join('');
        });
}

function loadAlerts() {
    fetch('data/alerts.json')
        .then(response => response.json())
        .then(data => {
            const alertMessagesDiv = document.getElementById("alert-messages");
            alertMessagesDiv.innerHTML = data.map(alert => `
                <p>${alert.timestamp}: ${alert.message}</p>
            `).join('');
        });
}

function sendVoiceMessage() {
    const message = document.getElementById("voice-message").value;
    if (message.trim() === "") {
        alert("請輸入提示消息");
        return;
    }

    // 這裡可以添加代碼，將消息發送到助步器的語音助理
    console.log("發送語音消息:", message);
    alert("語音消息已發送: " + message);
}

function sendPresetMessage(message) {
    document.getElementById("voice-message").value = message;
    sendVoiceMessage();
}
