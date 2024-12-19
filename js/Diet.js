function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activity-level').value);

    // BMR calculation using Mifflin-St Jeor Equation
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const dailyCalories = bmr * activityLevel;

    document.getElementById('calorie-result').textContent = `Your daily calorie needs: ${dailyCalories.toFixed(2)} kcal`;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const height = parseFloat(document.getElementById('bmi-height').value) / 100;

    const bmi = weight / (height * height);

    document.getElementById('bmi-result').textContent = `Your BMI: ${bmi.toFixed(2)}`;
}

// Initialize sections as hidden
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calorie-content').style.display = 'none';
    document.getElementById('bmi-content').style.display = 'none';
});


