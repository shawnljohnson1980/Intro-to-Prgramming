
document.getElementById("myBtn").addEventListener("click", open);
function open() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.height = "300px";

}
document.getElementById("Btn").addEventListener("click", close);
function close() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("main").style.marginLeft = "0";
}
