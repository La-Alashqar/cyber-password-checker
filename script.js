// 1. ربط العناصر من الـ HTML بمتغيرات في البرمجة
const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strengthBar');
const feedback = document.getElementById('feedback');

// ربط عناصر القائمة (الشروط)
const requirements = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    number: document.getElementById('number'),
    special: document.getElementById('special')
};

// 2. مراقبة الحدث (عندما يكتب المستخدم أي حرف)
passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    // فحص المعايير وتحديث شكل القائمة

    // شرط الطول (8 أحرف)
    if (val.length >= 8) {
        strength += 25;
        requirements.length.classList.add('valid');
    } else {
        requirements.length.classList.remove('valid');
    }

    // شرط الحروف الكبيرة (A-Z)
    if (/[A-Z]/.test(val)) {
        strength += 25;
        requirements.uppercase.classList.add('valid');
    } else {
        requirements.uppercase.classList.remove('valid');
    }

    // شرط وجود أرقام
    if (/[0-9]/.test(val)) {
        strength += 25;
        requirements.number.classList.add('valid');
    } else {
        requirements.number.classList.remove('valid');
    }

    // شرط الرموز الخاصة
    if (/[!@#$%^&*]/.test(val)) {
        strength += 25;
        requirements.special.classList.add('valid');
    } else {
        requirements.special.classList.remove('valid');
    }

    // 3. تحديث شريط القوة والألوان
    updateBar(strength);
});

function updateBar(strength) {
    strengthBar.style.width = strength + '%';

    if (strength <= 25) {
        strengthBar.style.backgroundColor = '#ef4444'; // أحمر - ضعيف جداً
        feedback.innerText = "تحذير: كلمة مرور ضعيفة جداً!";
    } else if (strength <= 50) {
        strengthBar.style.backgroundColor = '#f59e0b'; // برتقالي - متوسط
        feedback.innerText = "جيد، ولكن يمكن تحسينها.";
    } else if (strength <= 75) {
        strengthBar.style.backgroundColor = '#38bdf8'; // أزرق - قوي
        feedback.innerText = "كلمة مرور قوية.";
    } else {
        strengthBar.style.backgroundColor = '#22c55e'; // أخضر - حصينة
        feedback.innerText = "ممتاز! كلمة مرورك حصينة.";
    }
}
// ربط الزر من الـ HTML
const toggleView = document.getElementById('toggleView');

// برمجة حركة الضغط على الزر
toggleView.addEventListener('click', () => {
    // التحقق من النوع الحالي
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // إظهار الكلمة
        toggleView.innerText = 'إخفاء'; // تغيير نص الزر
    } else {
        passwordInput.type = 'password'; // إخفاء الكلمة
        toggleView.innerText = 'إظهار'; // إعادة نص الزر
    }
});