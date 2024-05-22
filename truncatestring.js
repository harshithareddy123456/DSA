const string = "Subscribe to roadside coder";
const maxlength = 9;
output = "Subscribe...";

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";
  }
  return str;
}

console.log(truncate(string, maxlength));
