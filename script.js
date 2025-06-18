function generateReport() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const activity = document.getElementById("activity").value;
  const result = document.getElementById("result");

  if (!name || !age || !gender || !height || !weight || !activity) {
    result.innerHTML = "❌ Please fill all fields.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
  let bmiStatus = "";

  if (bmi < 18.5) bmiStatus = "Underweight";
  else if (bmi < 24.9) bmiStatus = "Normal";
  else if (bmi < 29.9) bmiStatus = "Overweight";
  else bmiStatus = "Obese";

  let bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  const multiplier = {
    "sedentary": 1.2,
    "light": 1.375,
    "active": 1.55,
    "very active": 1.725
  };

  const calories = Math.round(bmr * multiplier[activity]);
  const waterLitres = Math.round(weight * 0.033 * 10) / 10;

  result.innerHTML = `
    <h3>👤 Health Report for ${name}</h3>
    🧮 BMI: <b>${bmi}</b> (${bmiStatus})<br>
    🔥 Daily Calorie Needs: <b>${calories} kcal</b><br>
    💧 Water Intake: <b>${waterLitres} L/day</b><br>
    💤 Sleep: 7-8 hrs/day<br>
    🏃 Activity: Moderate exercise recommended
  `;
}
