const garde = "G";

switch (grade){
    case "A":
        console.log("A -> very good");
        break;
    case "B":
        console.log("B -> Good, keep learning");
        break;
    case "C":
        console.log("C -> Need Improvement");
        break;
    case "D": case "E":
        console.log("D -> Not Good");
        break;
    default:
        console.log("Invalid Grade");
}
