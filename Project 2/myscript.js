function runs(e) {
  e.preventDefault();
  console.log("called");
  console.log(e.target.firstname.value);
}
