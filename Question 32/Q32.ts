let current_users: string[] = ["umar", "yasin", "haris", "shahzaib", "muzamil"];
let new_users: string[] = ["billal", "Ahmed", "ali", "UMAR", "yasin"];

for (let users of new_users) {
  if (current_users.includes(users.toUpperCase())) {
    console.log(`${users} not available`);
  } 
  else if (current_users.includes(users.toLowerCase())) {
    console.log(`${users} not available`);
  } 
  else {
    console.log(`${users}  is available`);
  }
}
