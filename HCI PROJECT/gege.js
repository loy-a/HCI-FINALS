const loginArea = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
})

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
})