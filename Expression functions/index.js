const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];


let totalIncome = incomeStatement[0]; 
let totalExpenses = 0;

for (let i = 1; i < incomeStatement.length; i++) {
    const item = incomeStatement[i];
    
    if (typeof item === 'number') {
        
        if (item > 0) {
            totalIncome += item; 
        } else {
            totalExpenses += Math.abs(item); 
        }
    }
}


let remainingBudget = totalIncome - totalExpenses;


let companySupport = totalIncome * 0.2; 


let totalBudget = remainingBudget + companySupport;

console.log("Fikret Bey'in kendi bütçesi:", remainingBudget);
console.log("Şirketin bütçe desteği:", companySupport);
console.log("Toplam bütçe:", totalBudget);