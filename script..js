document.addEventListener("DOMContentLoaded", function() {
    loadGPSData();
    startHealthMonitoring();
    startEnvironmentMonitoring();
  });
  
  function loadGPSData() {
    // 模擬獲取GPS定位資訊
    setTimeout(() => {
      const gpsData = {
        latitude: 25.0422,
        longitude: 121.534,
        timestamp: new Date().toLocaleString('zh-TW')
      };
      const gpsInfo = document.getElementById("gps-info");
      gpsInfo.innerHTML = `緯度: ${gpsData.latitude}, 經度: ${gpsData.longitude}<br>更新時間: ${gpsData.timestamp}`;
    }, 2000); // 模擬2秒後獲取資料
  }
  
  function startHealthMonitoring() {
    // 模擬健康監控功能
    setInterval(() => {
      const heartRate = Math.floor(Math.random() * 50) + 70;
      const pulse = Math.floor(Math.random() * 30) + 70;
  
      // 更新心率和脈搏數據
      const heartRateInfo = document.getElementById("heart-rate");
      heartRateInfo.textContent = `心率: ${heartRate} bpm`;
  
      const pulseInfo = document.getElementById("pulse");
      pulseInfo.textContent = `脈搏: ${pulse}`;
  
      // 模擬定時提醒功能
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
  
      if (hours === 8 && minutes === 0) {
        const medicationReminder = document.getElementById("medication-reminder");
        medicationReminder.textContent = "藥物提醒: 現在是吃藥時間！";
      }
  
      // 模擬心率過高警告
      if (heartRate > 100) {
        const highHeartRateWarning = document.getElementById("high-heart-rate-warning");
        highHeartRateWarning.textContent = "心率過高警告: 請注意您的健康狀況！";
      }
    }, 6000); // 每6秒檢查一次
  }
  
  function startEnvironmentMonitoring() {
    // 模擬環境監控功能
    setInterval(() => {
      const temperature = (Math.random() * 2 + 36).toFixed(1);
      const smoke = Math.random() < 0.3 ? "有煙霧" : "無煙霧";
  
      // 更新溫度和煙霧狀況數據
      const temperatureInfo = document.getElementById("temperature");
      temperatureInfo.textContent = `溫度: ${temperature} °C`;
  
      const smokeInfo = document.getElementById("smoke");
      smokeInfo.textContent = `煙霧狀況: ${smoke}`;
  
      // 偵測異常情況
      if (temperature > 38 || smoke === "有煙霧") {
        alert("注意：偵測到環境異常！");
      }
    }, 8000); // 每8秒檢查一次
  }
  
  // 定義發送手動輸入提示消息的函數
  function sendVoiceMessage() {
    const voiceMessageTextarea = document.getElementById("voice-message");
    const message = voiceMessageTextarea.value.trim();
  
    if (message !== "") {
      sendVoiceCommand(message);
  
      // 清空文本框
      voiceMessageTextarea.value = "";
    }
  }
  
  // 定義發送預設提示消息的函數
  function sendPresetMessage(message) {
    sendVoiceCommand(message);
  }
  
  // 模擬發送提示訊息功能
  function sendVoiceCommand(command) {
    const speaker = new SpeechSynthesisUtterance(command);
    window.speechSynthesis.speak(speaker);
  }
  
  // 模擬遠端語音提示功能
  function simulateRemoteVoiceCommand() {
    const command = "請注意，您的家人需要您的協助。";
    const speaker = new SpeechSynthesisUtterance(command);
    window.speechSynthesis.speak(speaker);
  }
  
  // 假設在某個事件觸發時需要進行遠端語音提示
  setTimeout(simulateRemoteVoiceCommand, 10000); // 模擬10秒後收到遠端提示
  // 定義發送手動輸入提示消息的函數
function sendVoiceMessage() {
    const voiceMessageTextarea = document.getElementById("voice-message");
    const message = voiceMessageTextarea.value.trim();

    if (message !== "") {
        sendVoiceCommand(message);

        // 清空文本框
        voiceMessageTextarea.value = "";
    }
}

// 定義發送預設提示消息的函數
function sendPresetMessage(message) {
    sendVoiceCommand(message);
}

// 模擬發送提示訊息功能
function sendVoiceCommand(command) {
    const speaker = new SpeechSynthesisUtterance(command);
    window.speechSynthesis.speak(speaker);
}
// 模擬發送提示訊息功能
function sendVoiceCommand(command) {
    const speaker = new SpeechSynthesisUtterance(command);
    window.speechSynthesis.speak(speaker);
}

// 定義發送手動輸入提示消息的函數
function sendVoiceMessage() {
    const voiceMessageTextarea = document.getElementById("voice-message");
    const message = voiceMessageTextarea.value.trim();

    if (message !== "") {
        sendVoiceCommand(message);

        // 清空文本框
        voiceMessageTextarea.value = "";

        // 彈出提示框顯示發送的消息
        alert(`已發送手動輸入消息：${message}`);
    }
}

// 定義發送預設提示消息的函數
function sendPresetMessage(message) {
    sendVoiceCommand(message);

    // 彈出提示框顯示發送的預設消息
    alert(`已發送語音訊息至助步器：${message}`);
}