let budget = 0;
let expenses = [];

function calculateBudget() {
  const budgetInput = document.getElementById('budgetInput');
  budget = parseInt(budgetInput.value) || 0;
  updateBudgetDisplay();
}

function updateBudgetDisplay() {
  const budgetResult = document.getElementById('budgetResult');
  budgetResult.textContent = `Presupuesto: $${budget}`;
}

function addExpense() {
    const expenseNameInput = document.getElementById('expenseName');
    const expenseAmountInput = document.getElementById('expenseAmount');
  
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseInt(expenseAmountInput.value) || 0;
  
    if (expenseName && expenseAmount) {
      expenses.push({ name: expenseName, amount: expenseAmount });
      updateExpensesList();
      updateSummary();
  
      // Limpiar el formulario después de agregar un gasto
      expenseNameInput.value = '';
      expenseAmountInput.value = '';
    }
  }
  

function updateExpensesList() {
  const expensesList = document.getElementById('expensesList');
  expensesList.innerHTML = '';

  for (const expense of expenses) {
    const expenseItem = document.createElement('div');
    expenseItem.className = 'expense-item';
    expenseItem.innerHTML = `<span>${expense.name}: $${expense.amount}</span>`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => deleteExpense(expense);

    expenseItem.appendChild(deleteButton);
    expensesList.appendChild(expenseItem);
  }
}

function deleteExpense(expenseToDelete) {
  expenses = expenses.filter(expense => expense !== expenseToDelete);
  updateExpensesList();
  updateSummary();
}

function updateSummary() {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const balance = budget - totalExpenses;

  const summaryResult = document.getElementById('summaryResult');
  summaryResult.textContent = `Gastos: $${totalExpenses} | Saldo: $${balance}`;
}

// Initial setup
updateBudgetDisplay();
