// let expenses = [];

// document.getElementById('expenseForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let expense_name = document.getElementById('expenseName').value;
//     let expense_amount = document.getElementById('expenseAmount').value;

//     addExpense(expense_name, expense_amount);
//     console.log('Expense Added:', expense_name, expense_amount);
// });

// function addExpense(name, amount) {
//     if (!name || !amount) return;

//     const expense = {
//         name: name,
//         amount: parseFloat(amount)
//     };

//     expenses.push(expense);

//     displayExpenses();

//     localStorage.setItem('expenses', JSON.stringify(expenses));
// }

// function displayExpenses() {
//     const list = document.getElementById('expenseList');
//     list.innerHTML = '';

//     for (let expense of expenses) {
//         const li = document.createElement('li');
//         li.textContent = `${expense.name}: $${expense.amount}`;
//         list.appendChild(li);
//     }
// }
let expenses = [];

// load saved data from localStorage when page opens
if (localStorage.getItem('expenses')) {
  expenses = JSON.parse(localStorage.getItem('expenses'));
  displayExpenses();
}

document.getElementById('expenseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let expense_name = document.getElementById('expenseName').value;
  let expense_amount = document.getElementById('expenseAmount').value;

  addExpense(expense_name, expense_amount);
  console.log('Expense Added:', expense_name, expense_amount);

  // optional: clear the form after submission
  document.getElementById('expenseForm').reset();
});

function addExpense(name, amount) {
  if (!name || !amount) return;

  const expense = {
    name: name,
    amount: parseFloat(amount)
  };

  expenses.push(expense);
  displayExpenses();
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function displayExpenses() {
  const list = document.getElementById('expenseList');
  list.innerHTML = '';

  for (let expense of expenses) {
    const li = document.createElement('li');
    li.textContent = `${expense.name}: RP.${expense.amount}`;
    list.appendChild(li);
  }
}
document.getElementById('clearExpensesBtn').addEventListener('click', function() {
    clearExpenses();
 });
 function clearExpenses() {
     expenses = [];
     localStorage.removeItem('expenses');
     displayExpenses();
 }
