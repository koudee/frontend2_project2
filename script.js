let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
  let developers = arr.filter(employee => employee.profession === 'developer');
  console.log(developers);
  }
  PrintDeveloper();
  function addData() {
    let newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
    arr.push(newEmployee);
    console.log(arr);
  }
  addData();
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== 'admin');
    console.log(arr);
  }
  removeAdmin();
  
  function concatenateArray() {
    let newEmployees = [
        { id: 4, name: 'susan', age: 22, profession: 'designer' },
        { id: 5, name: 'mike', age: 25, profession: 'developer' },
        { id: 6, name: 'emma', age: 21, profession: 'admin' },
      ];
      arr = arr.concat(newEmployees);
      console.log(arr);
  }
  concatenateArray()
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }